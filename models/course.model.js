const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: ObjectId,
      required: true,
      ref: 'Category',
    },
    lecturer: {
      type: ObjectId,
      required: true,
      ref: 'User',
    },
    rating: { type: Number, default: 0 },
    originPrice: { type: Number },
    promotion: { type: ObjectId, ref: 'Promotion' },
    totalPrice: {
      type: Number,
      default: function () {
        return this.originPrice;
      },
    },
    avatar: { type: String },
    shortDescription: { type: String },
    fullDescription: { type: String },
    students: [{ type: ObjectId, ref: 'User' }],
    feedbacks: [
      {
        student: { type: ObjectId, ref: 'User' },
        content: String,
        rating: { type: Number, min: 1, max: 5 },
        createdAt: {
          type: Date,
          default: function () {
            return Date.now();
          },
        },
      },
    ],
    isComplete: { type: Boolean, default: false },
    sections: [
      {
        name: String,
        lectures: [
          {
            title: String,
            video: String,
            content: String,
            attachedFiles: [String],
            totalMinutes: Number,
            order: { type: Number, default: 0 },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema, 'courses');

// courseSchema.pre('save', function (next) {
//   var doc = this;
//   Course.findByIdAndUpdate(
//     { _id: doc._id },
//     { $inc: { 'sections.lectures.order': 1 } },
//     function (error, counter) {
//       if (error) return next(error);
//       next();
//     }
//   );
// });

module.exports = Course;
