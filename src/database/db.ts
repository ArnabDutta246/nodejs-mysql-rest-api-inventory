import mysql from "mysql";

const param = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
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
