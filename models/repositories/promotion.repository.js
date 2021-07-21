const Promotion = require('../promotion.model');

const PromotionRepository = {
  insertOne: (promotion) => {
    return Promotion.create(promotion);
  },
};

module.exports = PromotionRepository;
