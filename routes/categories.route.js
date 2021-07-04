const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.mdw');
const categoriesController = require('../controllers/categories.controller');

router.post('/', categoriesController.create);
router.get('/tree', categoriesController.getAllTree);

module.exports = router;
