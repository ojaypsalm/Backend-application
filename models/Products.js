const { Timestamps } = require('mongodb')
const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: (true, 'please input a product name')

        },

        quantity: {
            type: Number,
            require: true
        },

        price: {
            type: Number,
            require: true
        },
        image: {
            type: String,
            require: false
        }

    },

    {
        Timestamps:true
    }
);

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;