const mongoose = require('mongoose');
const { Schema } = mongoose;


// Schema
const productSchema = new Schema({

    title: String,
    description: String,
    price: {type: Number, required: [true, "Please enter price"]} ,
    discountPercentage: Number,
    rating : {
        type: Number,
        min: [0, 'Cant be negative'],
        max: 5
    },
    brand: String,
    category: String,
    thumbnail: String,
    images: [ String ]
});

exports.Product = mongoose.model('Product', productSchema);