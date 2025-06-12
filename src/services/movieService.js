import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";
import {movies} from '../models/Movie.js'

const movieService =  {
    getAllMovies(filter={}){
        let result = movies.slice();
        //slice return new array with all elements
        //so we can edit the new array not the original

        if(filter.search){
            //our search is case sensitive
            //partial search enable .includes()
            result = result.filter(movie=>movie.title.toLowerCase().includes(filter.search.toLowerCase()));
        }
        if(filter.genre){
            result = result.filter(movie=>movie.genre.toLowerCase()===filter.genre.toLowerCase());
        }

        if(filter.year){
            result = result.filter(movie=>movie.year===filter.year);
        }
        return result;
    },
    createMovie(movieData){
        const movie=new Movie(movieData);
        
        //add movie to movies
        //movies.push(movieData);
 
        //return created movie
        return movie.save();
    },
    getOne(movieId){
        const movie = movies.find(movie=>movie.id===movieId);
        return movie;
    },
    //we can either make new method to filter search
    //or we can reuse get all with a filter
}
export default movieService;