var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: { type: Number, required: true },
    quantity: { type: Number, required: true },
    product: [{ type: String, ref: 'Product' }]
});

/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
schema.virtual('title').get(function () {
    //return 'Not Implemented!';
    return this.name.split(' ')[0];
});

/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
schema.virtual('lastName').get(function () {
    //return 'Not Implemented!';
    return this.name.split(' ')[this.name.split(' ').length - 1]
});

module.exports = schema;
