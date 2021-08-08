const _ = require('lodash');
const PromotionFactory = require('../models/factories/promotion.factory');
const CourseRepository = require('../models/repositories/course.repository');
const CourseFactory = require('../models/factories/course.factory');
const { CommonResponses, CoursesResponses } = require('../helpers/responses');
const CategoryFactory = require('../models/factories/category.factory');
const Course = require('../models/course.model');

module.exports.create = async (user, courseBody) => {
  // validate data

  let course = _.cloneDeep(courseBody);
  let { originPrice, promotion } = course;

  course.lecturer = user.userId;

  if (!promotion) {
    course = _.pickBy(course);
  } else {
    const promotionDocument = await PromotionFactory.findById(promotion);
    course.totalPrice = Math.round(
      originPrice * (1 - promotionDocument.discount)
    );
  }

  const courseDocument = await CourseRepository.insertOne(course);

  return {
    statusCode: 200,
    payload: { success: true, course: courseDocument },
  };
};

module.exports.getAll = async ({ category, sort, page, perPage }) => {
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

  query.sort = sort;
  query.page = +page;
  query.perPage = +perPage;

  const courses = await CourseFactory.findAll(query);
  const totalCourses = await Course.count({});
  const totalPages = Math.round(totalCourses / perPage);

  if (!courses) {
    return {
      statusCode: 200,
      payload: { success: false, msg: 'Query values is not valid' },
    };
  }

  return {
    statusCode: 200,
    payload: {
      success: true,
      courses,
      totalCourses,
      totalPages,
    },
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
  if (!course.students.map((student) => student.toString()).includes(userId)) {
    return CoursesResponses.postFeedbackFailStudentNotExist();
  }

  const totalPoint =
    course.feedbacks.reduce((acc, review) => acc + review.rating, 0) +
    feedback.rating;
  const averageRating = (totalPoint / (course.feedbacks.length + 1)).toFixed(2);

  feedback.student = userId;
  const updatedCourse = await await CourseRepository.addFeedback(
    courseId,
    feedback,
    averageRating
  );
  const feedbacks = updatedCourse.feedbacks;

  return {
    statusCode: 200,
    payload: { success: true, feedbacks },
  };
};

module.exports.update = async (courseId, dataToUpdate) => {
  const updatedCourse = await Course.findByIdAndUpdate(courseId, dataToUpdate, {
    new: true,
  }).lean();

  return {
    statusCode: 200,
    payload: { success: true, course: updatedCourse },
  };
};
