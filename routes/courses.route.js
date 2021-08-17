const express = require('express');
const router = express.Router();

const { ROLE } = require('../constants/models.constant');
const auth = require('../middlewares/auth.mdw');
const role = require('../middlewares/role.mdw');
const coursesController = require('../controllers/courses.controller');

router.post('/', auth, role(ROLE.TEACHER), coursesController.create);

router.get('/', coursesController.getAll);
router.get('/teacher/:id', coursesController.getByTeacher);
router.get('/:id', coursesController.getById);
router.patch('/:id', auth, role(ROLE.TEACHER), coursesController.update);
router.post('/:id/feedback', auth, coursesController.receiveFeedback);

module.exports = router;
