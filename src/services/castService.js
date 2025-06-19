import Cast from "../models/Cast.js"

export default{
    create(castData){

       return Cast.create(castData);
       //we return the promise to be awaited when service called
    }
}