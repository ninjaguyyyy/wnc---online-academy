const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.mdw');
const coursesController = require('../controllers/courses.controller');

router.get('/upload', coursesController.upload);

module.exports = router;
