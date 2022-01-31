import jwt from "jsonwebtoken";
import UserModel from "../../models/user";

export default function helper(req, res) {
  const validateJWT = (req, res) => {
    let token = req.cookies.token;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.send({
            message: "Unvalid token",
            status: {
              code: 401,
              message: "Unauthorized",
            },
          });
        } else {
          const id = decoded.id;
          UserModel.findById(id)
            .select(["-password", "-updatedAt", "-createdAt"])
            .then((user) => {
              if (!user) {
                res.send({
                  message: "User not found",
                  status: {
                    code: 404,
                    message: "Not found",
                  },
                });
              } else {
                res.send({
                  message: "Valid token",
                  results: user,
                  status: {
                    code: 200,
                    message: "OK",
                  },
                });
              }
            })
            .catch((err) => {
              res.send({
                message: "Error",
                status: {
                  code: 500,
                  message: "Internal server error",
                },
              });
            });
        }
      });
    } else {
      res.status(401).json({
        message: "No token provided",
        status: {
          code: 401,
          message: "Unauthorized access",
        },
      });
    }
  };

  const { method } = req;

  switch (method) {
    case "POST":
      return validateJWT(req, res);
    default:
      return res.status(405).json({
        message: "Method not allowed",
        status: {
          code: 405,
          message: "Method not allowed",
        },
      });
  }
}
