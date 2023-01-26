const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
  }
);

const User = model('User', UserSchema);

module.exports = User;
