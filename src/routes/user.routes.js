import { Router } from 'express';
const router = Router();
import userController from '../controllers/user.controller.js';
import auth from '../controllers/auth.controller.js';
import passport from 'passport';
import checkAdminRole from '../middlewares/auth.handler.js'
// http://localhost:3000/api/v1/user/
router.get('/', userController.inicio);

// http://localhost:3000/api/v1/user/singUp - registrar usuario
router.post(
  '/singUp',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  auth.singUp
);

// http://localhost:3000/api/v1/user/singIn - Ingreso de usuario
router.post('/singIn', auth.singIn);

export default router;
