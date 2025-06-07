import express from 'express';
import handlebars from 'express-handlebars';
import homeController from './controlers/homeController.js';
import movieController from './controlers/movieController.js';

//init express instnace
const app = express();

//add static folder (middleware) - checks if static file exists
app.use(express.static('./src/public'));

//Add body parser for req.body (middleware)
app.use(express.urlencoded());

//use factory method for express engine
app.engine('hbs',handlebars.engine({
    extname: 'hbs',
}));

//set default engine
app.set('view engine','hbs');

//set default view folder
app.set('views','./src/views')

//configure routes
//using modular router
app.use(homeController);
//use controller only when url start with movies
app.use('/movies',movieController);


//initiate express server
app.listen(5000,()=>console.log('Server is listening on http://localhost:5000...'));