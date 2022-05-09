import { Router } from "express";
const router = Router();
import userRouter from "./user.routes.js";

function routerApi(app) {
    app.use('/api/v1', router);
    router.use('/user', userRouter);
  }

 
export default routerApi;