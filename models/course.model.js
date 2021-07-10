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
    appliedPromotions: [{ type: ObjectId, ref: 'Promotion' }],
    totalPrice: { type: Number },
    avatar: { type: String },
    shortDescription: { type: String },
    fullDescription: { type: String },
    students: [{ type: ObjectId, ref: 'User' }],
    feedbacks: [
      {
        student: { type: ObjectId, ref: 'User' },
        content: String,
        rating: { type: Number, min: 1, max: 5 },
        createdAt: String,
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
            attachedFiles: [String],
            totalMinutes: Number,
            order: Number,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema, 'courses');
module.exports = Course;
