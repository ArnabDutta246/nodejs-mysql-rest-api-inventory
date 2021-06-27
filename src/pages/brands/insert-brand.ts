import { Request, Response, NextFunction } from "express";
import { Connect, Query } from "../../database/db";

import Brand from "../modals/brand";
import ResponseObj from "../modals/response";

export const createBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // variables
  let responseObj: ResponseObj = {
    message: "",
    error: "",
    status: 200,
    obj: null,
  };
  let currDate = new Date();
  let { name } = req.body as Brand;
  const values = [name, currDate];
  // query string
  const queryString =
    "INSERT INTO ProductOrder (name, createdAt) VALUES (?, ?)";

  // inset

  Connect()
    .then((connection) => {
      Query(connection, queryString, values)
        .then((result) => {
          // logging.info(NAMESPACE, "Book created: ", result);

          return res.status(200).json({
            result,
          });
        })
        .catch((error) => {
          // logging.error(NAMESPACE, error.message, error);

          return res.status(200).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          // logging.info(NAMESPACE, "Closing connection.");
          connection.end();
        });
    })
    .catch((error) => {
      // logging.error(NAMESPACE, error.message, error);

      return res.status(200).json({
        message: error.message,
        error,
      });
    });
};
