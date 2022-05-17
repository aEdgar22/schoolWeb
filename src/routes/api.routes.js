import { Router } from "express";
const router = Router();
import userRouter from "./user.routes.js";
import landingRouter from "./landing.routes.js";
import sedesRouter from "./sede.routes.js";
import cursosRouter from "./curso.routes.js";

function routerApi(app) {
    app.use('/api/v1', router);
    router.use('/landing',landingRouter)
    router.use('/user', userRouter);
    router.use('/sede', sedesRouter);
    router.use('/curso', cursosRouter);
  }


export default routerApi;