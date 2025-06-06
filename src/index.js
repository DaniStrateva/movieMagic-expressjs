import express from 'express';
import handlebars from 'express-handlebars';

//init express instnace
const app = express();

//use factory method for express engine
app.engine('hbs',handlebars.engine({
    extname: 'hbs',
}));

//set default engine
app.set('view engine','hbs');

//configure routes
app.get('/',(req,res)=>{
    res.render('home',{layout: false})
});

//initiate express server
app.listen(5000,()=>console.log('Server is listening on http://localhost:5000...'));