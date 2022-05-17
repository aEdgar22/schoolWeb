import { Router } from "express";
const router = Router();
import sedeController from '../controllers/sede.controller.js'

// http://localhost:3000/api/v1/sede/
router.get('/', sedeController.getSedes);

// http://localhost:3000/api/v1/sede/createSede
router.post('/createSede', sedeController.createSede);


export default router;