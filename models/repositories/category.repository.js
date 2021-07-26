const Category = require('../category.model');

const CategoryRepository = {
  insertOne: (category) => {
    return Category.create(category);
  },
};

module.exports = CategoryRepository;
