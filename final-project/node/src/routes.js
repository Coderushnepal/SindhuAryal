import { Router } from 'express';

import * as endpoints from './constants/endpoints';
import * as blogsController from './controllers/blogs';
import * as adminController from './controllers/admin_login';

import { validateAdminCreation, validateAdminLogin } from './schemas/admin_login';

const router = Router();

router.get('/', (req, res, next) => {
  res.json({
    name: 'my-portfolio',
    version: '1.0.0'
  });
});

// login
router.post( endpoints.ADMIN_LOGIN, validateAdminLogin, adminController.adminLogin );
router.post( endpoints.ADMIN_SIGNUP, validateAdminCreation, adminController.createAdmin );

//blogs
router.get(endpoints.GET_ALL_BLOGS, blogsController.getAllBlogs);

export default router;