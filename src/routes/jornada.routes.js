import { Router } from "express";
const router = Router();
import jornadaController from '../controllers/jornada.controller.js'

// http://localhost:3000/api/v1/jornada/

router.get('/', jornadaController.getJornadas);

export default router;