import express from 'express';
import handlebars from 'express-handlebars';
import homeController from './controlers/homeController.js';
import movieController from './controlers/movieController.js';
import mongoose from 'mongoose';

//init express instnace
const app = express();

//add static folder (middleware) - checks if static file exists
app.use(express.static('./src/public'));

//Add body parser for req.body (middleware)
app.use(express.urlencoded());

//use factory method for express engine
app.engine('hbs',handlebars.engine({
    extname: 'hbs',
    //add helpers for rating
    helpers:{
        showRating(rating){
            return '&#x2605;'.repeat(Math.floor(rating));
            //use {{{}}} in details.hbs to get stars
        }
    }
}));

//connect database 
try{
    await mongoose.connect(`mongodb://localhost:27017`,{dbName:`MagicMovies`})
    console.log('Successfully connected to DB')
}catch(err){//catch error in case no connection
    console.log('Cannot connect to DB');
    console.log(err.message);
}


//set default engine
app.set('view engine','hbs');

//set default view folder
app.set('views','./src/views')

//configure routes
//using modular router
app.use(homeController);
//use controller only when url start with movies
app.use('/movies',movieController);

//404 page add after controllers
app.all('*url',(req,res)=>{
    res.render('404');
})


//initiate express server
app.listen(5000,()=>console.log('Server is listening on http://localhost:5000...'));