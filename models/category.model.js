const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    parent: { type: mongoose.Types.ObjectId, ref: 'Category' },
    child: [{ type: mongoose.Types.ObjectId, ref: 'Category' }],
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema, 'categories');
module.exports = Category;
