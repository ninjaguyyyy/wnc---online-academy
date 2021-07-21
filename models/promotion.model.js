const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    discount: { type: Number, required: true },
    start: Date,
    end: Date,
  },
  { timestamps: true }
);

const Promotion = mongoose.model('Promotion', promotionSchema, 'promotions');
module.exports = Promotion;
