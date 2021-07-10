const express = require('express');
const router = express.Router();

const { ROLE } = require('../constants/models.constant');
const auth = require('../middlewares/auth.mdw');
const role = require('../middlewares/role.mdw');
const uploadFileMiddleware = require('../middlewares/upload/multer');
const coursesController = require('../controllers/courses.controller');

router.post(
  '/',
  auth,
  role(ROLE.TEACHER),
  uploadFileMiddleware.single('avatar'),
  coursesController.create
);

module.exports = router;
