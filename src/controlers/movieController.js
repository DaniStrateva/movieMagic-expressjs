import express from 'express';
import movieService from '../services/movieService.js';

const movieController = express.Router();

//using only /create since we use
//this controller only when url starts with /movies 
//check index.js
movieController.get('/create',(req,res)=>{
    res.render('create');
});


movieController.post('/create',(req,res)=>{
    //index.js add body parser to read data
    const newMovie = req.body;

    //save new movie (this logic is for service)
    movieService.createMovie(newMovie);

    //redirect to home page
    res.redirect('/');

});

movieController.get('/:movieId/details',(req,res)=>{
    //get movieId from parameters
    const movieId = req.params.movieId;

    //show details page
    res.render('details');
})


export default movieController;