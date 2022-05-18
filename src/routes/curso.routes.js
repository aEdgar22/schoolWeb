import { Router } from "express";
const router = Router();
import cursoController from '../controllers/curso.controller.js';

// http://localhost:3000/api/v1/curso/
router.get('/', cursoController.getCursos);

router.get('/createCurso', cursoController.renderCreateCurso)

export default router;