const Promotion = require('../promotion.model');

const PromotionFactory = {
  findAll() {
    return Promotion.find({});
  },
  findById(id) {
    return Promotion.findOne({ _id: id }).exec();
  },
  findByIds(ids) {
    return Promotion.find({
      _id: { $in: ids },
    }).exec();
  },
};

module.exports = PromotionFactory;
