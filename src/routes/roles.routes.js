import { Router } from "express";
const router = Router();
import roleController from '../controllers/role.controller.js'

// http://localhost:3000/api/v1/role/
router.get('/', roleController.getRoles);

export default router;