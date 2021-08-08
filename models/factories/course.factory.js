var ObjectId = require('mongoose').Types.ObjectId;
const Course = require('../course.model');

const CourseFactory = {
  findAll({ categories, sort, search, page, perPage }) {
    let sortOption = {};
    if (sort) {
      const receivedSortValue = sort.split('_');
      log(receivedSortValue);
      const field =
        receivedSortValue[0] === 'price' ? 'totalPrice' : receivedSortValue[0];
      sortOption = { [field]: receivedSortValue[1] };
    }

    const filter = {
      $or: [
        { title: { $regex: new RegExp(search), $options: 'i' } },
        { fullDescription: { $regex: new RegExp(search), $options: 'i' } },
        { shortDescription: { $regex: new RegExp(search), $options: 'i' } },
        { $text: { $search: search } },
      ],
    };
    categories && (filter.category = { $in: categories });
    return Course.find(filter)
      .sort(sortOption)
      .skip(page === 1 ? 0 : (page - 1) * perPage)
      .limit(perPage)
      .populate('appliedPromotions')
      .populate('category')
      .populate('lecturer')
      .populate('promotion')
      .lean()
      .exec();
  },
  findById(id) {
    if (!ObjectId.isValid(id)) {
      return false;
    }
    return Course.findOne({ _id: id })
      .populate('appliedPromotions')
      .populate('category')
      .populate('lecturer')
      .populate('promotion')
      .populate('feedbacks.student')
      .lean()
      .exec();
  },
  findByLecturer(teacherId) {
    if (!ObjectId.isValid(teacherId)) {
      return false;
    }
    return Course.find({ lecturer: teacherId })
      .populate('appliedPromotions')
      .populate('category')
      .populate('lecturer')
      .populate('promotion')
      .lean()
      .exec();
  },
};

module.exports = CourseFactory;
