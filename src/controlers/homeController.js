import express from 'express';

//new instance of modular router
//make sure controller has appropriate name
const homeController = express.Router();


homeController.get('/',(req,res)=>{
    res.render('home')
});

homeController.get('/about',(req,res)=>{
    res.render('about');
})

export default homeController;