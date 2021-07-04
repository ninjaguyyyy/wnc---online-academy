const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    path: { type: String, default: null },
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema, 'categories');
module.exports = Category;
