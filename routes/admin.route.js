const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.mdw');
const role = require('../middlewares/role.mdw');
const adminController = require('../controllers/admin.controller');
const { ROLE } = require('../constants/models.constant');

router.post('/users', auth, role(ROLE.ADMIN), adminController.createUser);
router.delete('/users/:id', auth, role(ROLE.ADMIN), adminController.deleteUser);
router.patch('/users/:id', auth, role(ROLE.ADMIN), adminController.updateUser);

router.patch(
  '/courses/:id/disable',
  auth,
  role(ROLE.ADMIN),
  adminController.disableCourse
);
router.patch(
  '/courses/:id/enable',
  auth,
  role(ROLE.ADMIN),
  adminController.enableCourse
);
router.delete(
  '/courses/:id',
  auth,
  role(ROLE.ADMIN),
  adminController.deleteCourse
);

module.exports = router;
