import express from 'express';

const movieController = express.Router();

//using only /create since we use
//this controller only when url starts with /movies 
//check index.js
movieController.get('/create',(req,res)=>{
    res.render('create');
});


movieController.post('/create',(req,res)=>{
    //index.js add body parser
    const newMovie = req.body;

    //save new movie

    //redirect to home page

});


export default movieController;