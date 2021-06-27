import { Request, Response, NextFunction } from "express";
import { Connect, Query } from "../../database/db";

import Brand from "../modals/brand";
import ResponseObj from "../modals/response";

export const deleteBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let currDate = new Date();
  let { id } = req.body as Brand;
  const values = [id];
  // query string
  const queryString = "DELETE FROM brands where id=?";

  // inset
  Connect()
    .then((connection) => {
      Query(connection, queryString, values)
        .then((result) => {
          // logging.info(NAMESPACE, "Book created: ", result);

          return res.status(200).json({
            ...responseFunction(200, "Data deleted successfully !!", result),
          });
        })
        .catch((error) => {
          // logging.error(NAMESPACE, error.message, error);

          return res.status(200).json({
            ...responseFunction(
              200,
              "Data deletion process failed!!",
              null,
              error
            ),
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
        ...responseFunction(
          200,
          "Database not able to connected!!",
          null,
          error
        ),
      });
    });
};

function responseFunction(
  status: number,
  msg: string,
  object: any = null,
  err?: any
): ResponseObj {
  // variables
  return {
    message: msg,
    error: err,
    status: status,
    obj: object,
  } as ResponseObj;
}

export default deleteBrand;
