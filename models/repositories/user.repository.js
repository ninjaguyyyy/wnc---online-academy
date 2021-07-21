const User = require('../user.model');

const UserRepository = {
  insertUser(user) {
    return User.create(user);
  },
  updateUser(id, dataToUpdate) {
    return User.findByIdAndUpdate(id, dataToUpdate, { new: true }).exec();
  },
  addFavoriteCourse(userId, courseId) {
    return User.findByIdAndUpdate(
      userId,
      { $push: { favoriteCourses: courseId } },
      { new: true }
    ).exec();
  },
  removeAFavoriteCourse(userId, courseId) {
    return User.findByIdAndUpdate(
      userId,
      { $pull: { favoriteCourses: courseId } },
      { new: true }
    ).exec();
  },

  addAttendedCourse(userId, courseId) {
    return User.findByIdAndUpdate(
      userId,
      { $push: { attendedCourses: courseId } },
      { new: true }
    ).exec();
  },
};

module.exports = UserRepository;
