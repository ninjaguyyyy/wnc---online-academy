const PromotionRepository = require('../models/repositories/promotion.repository');
const PromotionFactory = require('../models/factories/promotion.factory');

module.exports.create = async (promotionBody) => {
  const promotion = await PromotionRepository.insertOne(promotionBody);

  return { statusCode: 200, payload: { success: true, promotion } };
};

module.exports.getAll = async () => {
  const promotions = await PromotionFactory.findAll();

  return { statusCode: 200, payload: { success: true, promotions } };
};
