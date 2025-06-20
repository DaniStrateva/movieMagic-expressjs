import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";

const movieService = {
  async getAllMovies(filter = {}) {
    let result = await Movie.find({}).lean();
    //slice return new array with all elements
    //so we can edit the new array not the original
    //console.log(result)

    if (filter.search) {
      //our search is case sensitive
      //partial search enable .includes()
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(filter.search.toLowerCase())
      );
    }
    if (filter.genre) {
      result = result.filter(
        (movie) => movie.genre.toLowerCase() === filter.genre.toLowerCase()
      );
    }

    if (filter.year) {
      result = result.filter((movie) => movie.year === filter.year);
    }
    return result;
  },
  createMovie(movieData) {
    const movie = new Movie(movieData);
    //.save() returns async has to be awaited
    return movie.save();
  },
  async getOne(movieId) {
    const movie = await Movie.findById(movieId).lean();
    return movie;

    //we can not use async await if we write it as:
    //return movie = Movie.findById({movieId})
    //since already returns promise
  },

  //we can either make new method to filter search
  //or we can reuse get all with a filter
};
export default movieService;
