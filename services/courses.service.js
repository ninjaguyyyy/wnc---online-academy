const _ = require('lodash');
const PromotionFactory = require('../models/factories/promotion.factory');
const CourseRepository = require('../models/repositories/course.repository');

module.exports.create = async (user, courseBody, avatarFile) => {
  // validate data

  let course = _.cloneDeep(courseBody);
  let { originPrice, appliedPromotions: appliedPromotionsString } = course;

  course.avatar = avatarFile.filename;
  course.lecturer = user.userId;

  if (appliedPromotionsString) {
    const appliedPromotionsObject = JSON.parse(appliedPromotionsString);
    const appliedPromotionsDocuments = await PromotionFactory.findByIds(
      appliedPromotionsObject
    );
    const totalDiscount = appliedPromotionsDocuments.reduce(
      (acc, promotion) => acc + promotion.discount,
      0
    );
    course.appliedPromotions = appliedPromotionsObject;
    course.totalPrice = Math.round(originPrice * (1 - totalDiscount));
  }

  const courseDocument = await CourseRepository.insertOne(course);

  return {
    statusCode: 200,
    payload: { success: true, course: courseDocument },
  };
};
