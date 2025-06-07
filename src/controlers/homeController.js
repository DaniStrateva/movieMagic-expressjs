import express from 'express';
import movieService from '../services/movieService.js';
//new instance of modular router
//make sure controller has appropriate name
const homeController = express.Router();


homeController.get('/',(req,res)=>{
    const movies=movieService.getAllMovies();

    res.render('home',{movies});
});

homeController.get('/about',(req,res)=>{
    res.render('about');
})

export default homeController;