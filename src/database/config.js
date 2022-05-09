import "dotenv/config";

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    db_port: process.env.DB_PORT,
    jwt_secret: process.env.JWT_SECRET
  };

export default config;