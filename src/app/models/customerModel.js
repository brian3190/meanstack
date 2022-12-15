import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    type: String,
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: Number
});

export const customerSchema = new mongoose.Schema({
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
    address: [ addressSchema ],
    createdOn: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
})


