const PromotionRepository = require('../models/repositories/promotion.repository');

module.exports.create = async (promotionBody) => {
  const promotion = await PromotionRepository.insertOne(promotionBody);

  return { statusCode: 200, payload: { success: true, promotion } };
};
