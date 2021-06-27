import * as dotenv from "dotenv";
dotenv.config();

// mysql serve
const MYSQL_HOST = process.env.DB_HOST || "localhost";
const MYSQL_DATABASE = process.env.DB_NAME || "inventory";
const MYSQL_USER = process.env.DB_USER || "root";
const MYSQL_PASS = process.env.DB_PWD || "";

const MYSQL = {
  host: MYSQL_HOST,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  pass: MYSQL_PASS,
};

// node server
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

// export
const config = {
  mysql: MYSQL,
  server: SERVER,
};
export default config;
