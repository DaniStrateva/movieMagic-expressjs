import express from 'express';
import movieService from '../services/movieService.js';

const movieController = express.Router();

//using only /create since we use
//this controller only when url starts with /movies 
//check index.js
movieController.get('/create',(req,res)=>{
    res.render('create');
});


//astnchronous, we await create in order to save and redirect
movieController.post('/create',async(req,res)=>{
    //index.js add body parser to read data
    const newMovie = req.body;

    //save new movie (this logic is for service)
    await movieService.createMovie(newMovie);

    //redirect to home page
    res.redirect('/');

});

movieController.get('/:movieId/details',(req,res)=>{
    //get movieId from parameters
    const movieId = req.params.movieId;

    //use movie service to get the details for each movie
    const movie = movieService.getOne(movieId);

    //include rating using hbs custom helpers
    

    //show details page
    res.render('details',{movie});
});
movieController.get('/search',(req,res)=>{
    //get query string
    const filter = req.query;

    //get all movies with this filter
const movies = movieService.getAllMovies(filter);

    //load search page again 
    res.render('search',{movies, filter});
});


export default movieController;