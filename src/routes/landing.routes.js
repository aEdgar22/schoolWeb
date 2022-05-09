import { Router } from 'express';
const router = Router();
import landingController from '../controllers/landing.controller.js';


// http://localhost:3000/api/v1/landing/
router.get('/', landingController.inicio);

export default router;
