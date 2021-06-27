import mysql from "mysql2";
import config from "../config/environment";

const param = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.pass,
  database: config.mysql.database,
};

const Connect = async () => {
  return new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(param);

    connection.connect((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(connection);
    });
  });
};

const Query = async (
  connection: mysql.Connection,
  query: string,
  values: any[]
): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
};

export { Connect, Query };
