import express from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";

const movieController = express.Router();

//using only /create since we use
//this controller only when url starts with /movies
//check index.js
movieController.get("/create", (req, res) => {
  res.render("create");
});

//astnchronous, we await create in order to save and redirect
movieController.post("/create", async (req, res) => {
  //index.js add body parser to read data
  const newMovie = req.body;

  //save new movie (this logic is for service)
  await movieService.createMovie(newMovie);

  //redirect to home page
  res.redirect("/");
});

movieController.get("/:movieId/details", async (req, res) => {
  //get movieId from parameters
  const movieId = req.params.movieId;

  //use movie service to get the details for each movie
  const movie = await movieService.getOne(movieId);

  //include rating using hbs custom helpers

  //show details page
  res.render("movie/details", { movie });
});
movieController.get("/search", async (req, res) => {
  //get query string
  const filter = req.query;

  //get all movies with this filter
  const movies = await movieService.getAllMovies(filter);

  //load search page again
  res.render("search", { movies, filter });
});

//oad movie attach page
movieController.get('/:movieId/attach',async(req,res)=>{
  //get the movie id
  const movieId = req.params.movieId;
  //get movie by using movie service 
  const movie = await movieService.getOne(movieId);

  //get all casts
  const casts = await castService.getAll()
  console.log(casts)
  //pass all casts to template in render
  res.render('movie/attach', {movie, casts})

});

export default movieController;
