import express from 'express';

const movieController = express.Router();

//using only /create since we use
//this controller only when url starts with /movies 
//check index.js
movieController.get('/create',(req,res)=>{
    res.render('create');
})


export default movieController;