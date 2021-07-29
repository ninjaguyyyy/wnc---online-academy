const Course = require('../models/course.model');

module.exports.calcTotalCourseByCategory = async (req, res) => {
  const statistics = await Course.aggregate([
    { $match: {} },
    { $group: { _id: '$category', total: { $sum: 1 } } },
  ]).exec();
  return res.status(200).json({ success: true, statistics });
};
