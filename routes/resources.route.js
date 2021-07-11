const express = require('express');
const router = express.Router();

const resourcesController = require('../controllers/resources.controller');

router.get('/image/:filename', resourcesController.displayImage);
router.get('/video/:filename', resourcesController.displayVideo);

module.exports = router;
