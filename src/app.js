import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
const app = express();
import config from "./database/config.js";
import routerApi from "./routes/api.routes.js";
import './utils/auth/index.js';

import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//set port of server 
app.set('port',config.port);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

//static files
app.use(express.static(path.join(__dirname, "public")));

//settings
app.set('views', path.join(__dirname,'views'));
app.engine(".hbs", engine({
    partialsDir: path.join(app.get("views"), "partials"),
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs"
}));

app.set("view engine", ".hbs");

//routes
routerApi(app);



export default app;
