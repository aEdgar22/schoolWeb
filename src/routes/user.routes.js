import { Router } from 'express';
const router = Router();
import userController from '../controllers/user.controller.js';
import auth from '../controllers/auth.controller.js';
import passport from 'passport';
import checkAdminRole from '../middlewares/auth.handler.js';
//- registrar usuario
// http://localhost:3000/api/v1/user/singUp
router.post(
  '/singUp',
  //passport.authenticate('jwt', { session: false }),
  //checkAdminRole,
  auth.singUp
);
router.get('/singUp', userController.singUp)

//---------------------------------------------
//- Ingreso de usuario
//http://localhost:3000/api/v1/user/singIn
router.get('/singIn', userController.login)
router.post('/singIn',auth.singIn);

//----------------------------------------------
//- inicio Usuario Admin
// http://localhost:3000/api/v1/user/admin
router.get('/admin',userController.admin);

//- inicio Usuario Estudiante
// http://localhost:3000/api/v1/user/estudiante
router.get('/estudiante', userController.estudiante);

//- inicio Usuario profesor
// http://localhost:3000/api/v1/user/profesor
router.get('/profesor', userController.profesor);

// obtener profesores
// http://localhost:3000/api/v1/user/profesores
router.get('/profesores', userController.getProfesores);

// http://localhost:3000/api/v1/user/asignarArea
router.get('/asignarArea', userController.asignarArea)

// rederizar vista listar estudiante
router.get('/listEstudiante', userController.instEstu);

// rederizar vista listar profesor
router.get('/listProfesor', userController.instProf);




export default router;
