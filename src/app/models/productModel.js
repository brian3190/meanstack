import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
    productid: Number,
    name: String,
    price: Number,
    stock: Number,     
})