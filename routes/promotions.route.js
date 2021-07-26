const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.mdw');
const promotionsController = require('../controllers/promotions.controller');

router.post('/', promotionsController.create);
router.get('/', promotionsController.getAll);

module.exports = router;
