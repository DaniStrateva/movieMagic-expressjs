import {Schema, model} from 'mongoose';

const castSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
        min: 18,
        max: 99,
    },
    born:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true,
        validate: [/^https?:\/\//, 'Invalid Image URL.'],
    },
    
})

const Cast = model('Cast', castSchema);

export default Cast