const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const { ROLE } = require('../constants/models.constant');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    passWord: {
      type: String,
      required: true,
    },
    email: { type: String },
    role: { type: Number, required: true, default: ROLE.STUDENT },
    firstName: { type: String },
    lastName: { type: String },
    isActivated: { type: Boolean, default: false },
    otp: {
      number: Number,
      expired: String,
    },
    favoriteCourses: [{ type: ObjectId, ref: 'Course' }],
    attendedCourses: [{ type: ObjectId, ref: 'Course' }],
    ownCourses: [{ type: ObjectId, ref: 'Course' }],
    refreshToken: {type: String}
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema, 'users');
module.exports = User;
