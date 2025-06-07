import express from 'express';
import handlebars from 'express-handlebars';

//init express instnace
const app = express();

//add static folder (middleware) - checks if static file exists
app.use(express.static('./src/public'));

//use factory method for express engine
app.engine('hbs',handlebars.engine({
    extname: 'hbs',
}));

//set default engine
app.set('view engine','hbs');

//set default view folder
app.set('views','./src/views')

//configure routes
app.get('/',(req,res)=>{
    res.render('home')
});

app.get('/about',(req,res)=>{
    res.render('about');
})

//initiate express server
app.listen(5000,()=>console.log('Server is listening on http://localhost:5000...'));