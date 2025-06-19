import mongoose from "mongoose";
import { validate } from "uuid";
//or can do import {Schema, model} from "mongoose";
//and then just do new Schema (not mongoose.Schema);
//and =model instead of =mongoose.model
const maxYearAllowed = new Date().getFullYear() + 5;
const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Title is required.']
    },
    category:{
        type:String,
        required:[true, 'Category is required.']
    },
    genre:{
        type:String,
        required:[true, 'Genre is required.']
    },
    director:{
        type:String,
        required:[true, 'Director is required.']
    },
    year:{
        type:Number,
        required:[true, 'Year is required.'],
        min:1970,
        //max data is current plus 5 years dynamic
        max:[maxYearAllowed, `Year cannot be after ${maxYearAllowed}`],
    },
    imageUrl:{
        type:String,
        required:[true, 'Poster is required.'],
        //imageUrl validation with redex
        validate: /^https?:\/\//,
    },
    reating:{
        type:Number,
        required:[true, 'Rating is required.']
    },
    description:{
        type:String,
        required:[true, 'Description is required.'],
        maxLength:[200,'Description is too long!']
    },
});

//generate class movie
const Movie = mongoose.model('Movie',movieSchema);

export default Movie


/*import fs from 'node:fs/promises'

//class
//loads asynchronous first time
const moviesJson = await fs.readFile('./src/database.json');
//movies are saved
export const movies = JSON.parse(moviesJson);


//create new movie
export default class Movie {
    constructor(data){
        this.data=data;
    }
    //save method to save new movie in database
    async save(){
        //set unique id for each
        this.data.id = uuid();
        //make sure rating is a number not string
        this.data.rating=Number(this.data.rating);
        //add new movie data to movies
        movies.push(this.data);
        //write new movie in database
        await fs.writeFile('./src/database.json',JSON.stringify(movies,null,4));

        //return modified data
        return this.data;
    }
}*/