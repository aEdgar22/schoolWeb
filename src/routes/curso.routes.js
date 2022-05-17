import { Router } from "express";
const router = Router();
import cursoController from '../controllers/curso.controller.js';

router.get('/', cursoController.getCursos);



export default router;