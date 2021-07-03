const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.mdw');
const uploadFileMiddleware = require('../middlewares/upload/multer');
const coursesController = require('../controllers/courses.controller');

router.post(
  '/',
  uploadFileMiddleware.fields([
    { name: 'images', maxCount: 10 },
    { name: 'videos', maxCount: 1 },
  ]),
  coursesController.create
);

module.exports = router;
