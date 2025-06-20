import Cast from "../models/Cast.js"

export default{
    getAll(){
    //get all casts from database (dont await since we will await in movie controller)
        return Cast.find();
    },
    create(castData){
       return Cast.create(castData);
       //we return the promise to be awaited when service called
    }
}