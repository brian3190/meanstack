var mongoose = require('mongoose')
var emailValidator = require('email-validator')

module.exports = new mongoose.Schema({
  profile: {
    username: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: { unique: true },
      minlength: 3,
    },
    picture: {
      type: String,
      required: true,
      match: /^http:\/\//i
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: { unique: true },
      validate: {
        validator: emailValidator.validate,
        message: props => `${props.value} is not a valid email address`,
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true },
      minlength: 8,
    },
  },
  data: {
    oauth: { type: String, required: true },
    cart: [{
      product: {
        type: mongoose.Schema.Types.ObjectId
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1
      }
    }]
  }
});

module.exports.set('toObject', { virtuals: true });
module.exports.set('toJSON', { virtuals: true });
module.exports = mongoose.model('User', UserSchema);
