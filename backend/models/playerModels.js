import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})


