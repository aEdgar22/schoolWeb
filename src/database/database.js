import { Sequelize } from "sequelize";
import config from "./config.js";

const sequelize = new Sequelize(
    config.db_name,
    config.db_user,
    config.db_password, {
        host: config.db_host,
        dialect: "mysql"
    }
);

export default sequelize;