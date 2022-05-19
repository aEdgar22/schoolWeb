import { Router } from "express";
const router = Router();
import asignaturaController from '../controllers/asignatura.controller.js';

// vista crear asignatura
router.get('/createAsignatura',asignaturaController.renderCreateAsignatura);

// ruta para crear una asignatura
router.post('/createAsignatura', asignaturaController.createAsignatura)

export default router;
