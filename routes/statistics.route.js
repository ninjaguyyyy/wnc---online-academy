const express = require('express');
const router = express.Router();

const statisticsController = require('../controllers/statistics.controller');

router.get(
  '/courses-by-categories',
  statisticsController.calcTotalCourseByCategory
);

module.exports = router;
