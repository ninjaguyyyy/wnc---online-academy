const _ = require('lodash');
const PromotionFactory = require('../models/factories/promotion.factory');
const CourseRepository = require('../models/repositories/course.repository');
const CourseFactory = require('../models/factories/course.factory');
const { CommonResponses, CoursesResponses } = require('../helpers/responses');
const CategoryFactory = require('../models/factories/category.factory');

module.exports.create = async (user, courseBody) => {
  // validate data

  let course = _.cloneDeep(courseBody);
  let { originPrice, appliedPromotions } = course;

  course.lecturer = user.userId;

  if (appliedPromotions) {
    const appliedPromotionsDocuments = await PromotionFactory.findByIds(
      appliedPromotions
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

module.exports.getAll = async ({ category }) => {
  const query = {};
  if (category) {
    const categoryDocument = await CategoryFactory.findById(category);
    if (!categoryDocument) {
      return {
        statusCode: 200,
        payload: { success: false, msg: 'Category values is not valid' },
      };
    }
    query.categories = [category];
    const child = categoryDocument.child;
    child.length !== 0 && (query.categories = [...query.categories, ...child]);
  }
  const courses = await CourseFactory.findAll(query);

  if (!courses) {
    return {
      statusCode: 200,
      payload: { success: false, msg: 'Query values is not valid' },
    };
  }

  return {
    statusCode: 200,
    payload: { success: true, courses },
  };
};

module.exports.getById = async (id) => {
  const course = await CourseFactory.findById(id);
  if (!course) {
    return CommonResponses.getFailIdNotValid();
  }

  return {
    statusCode: 200,
    payload: { success: true, course },
  };
};

module.exports.receiveFeedback = async (courseId, userId, feedback) => {
  const course = await CourseFactory.findById(courseId);
  if (!course) {
    return CommonResponses.getFailIdNotValid();
  }
  if (!course.students.includes(userId)) {
    return CoursesResponses.postFeedbackFailStudentNotExist();
  }

  feedback.student = userId;
  const updatedCourse = await await CourseRepository.addFeedback(
    courseId,
    feedback
  );
  const feedbacks = updatedCourse.feedbacks;

  return {
    statusCode: 200,
    payload: { success: true, feedbacks },
  };
};
