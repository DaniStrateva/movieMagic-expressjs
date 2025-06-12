import fs from 'node:fs/promises'

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
}