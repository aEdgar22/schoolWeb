import { Router } from "express";
const router = Router();
import userRouter from "./user.routes.js";
import landingRouter from "./landing.routes.js";
import sedesRouter from "./sede.routes.js";
import cursosRouter from "./curso.routes.js";
import jornadaRouter from './jornada.routes.js';
import roleRouter from './roles.routes.js'

function routerApi(app) {
    app.use('/api/v1', router);
    router.use('/landing',landingRouter)
    router.use('/user', userRouter);
    router.use('/sede', sedesRouter);
    router.use('/curso', cursosRouter);
    router.use('/jornada', jornadaRouter);
    router.use('/role', roleRouter);
  }


export default routerApi;