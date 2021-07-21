const express = require('express');
const router = express.Router();

const uploadController = require('../controllers/upload.controller');
const uploadFileMiddleware = require('../middlewares/upload/multer');

router.post('/', uploadFileMiddleware.array('files'), uploadController.upload);

module.exports = router;
