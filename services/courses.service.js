const _ = require('lodash');
const CourseRepository = require('../models/repositories/course.repository');

module.exports.create = async (user, courseBody, avatarFile) => {
  // validate data

  // calc total price if have promotions
  let course = _.cloneDeep(courseBody);
  let { originPrice, appliedPromotions } = course;

  // appliedPromotions

  course.avatar = avatarFile.filename;
  course.lecturer = user.userId;
  course.totalPrice = appliedPromotions
    ? appliedPromotions.reduce(
        (promotion) => originPrice * (1 + promotion.discount),
        originPrice
      )
    : originPrice;

  const courseDocument = await CourseRepository.insertOne(course);

  return {
    statusCode: 200,
    payload: { success: true, course: courseDocument },
  };
};
