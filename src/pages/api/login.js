import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import UserModel from "../../models/User";
import dbConnect from "../../utils/db";

export default async function handler(req, res) {
  await dbConnect();

  const login = (req, res) => {
    const { user, password } = req.body;
    UserModel.findOne({ user })
      .then((user) => {
        if (!user) {
          res.status(401).json({
            message: "Invalid user or password",
          });
        } else {
          user
            .verifyPassword(password)
            .then((valid) => {
              if (!valid) {
                res.status(401).json({
                  message: "Invalid user or password",
                });
              } else {
                const payload = { id: user._id };
                const token = jwt.sign(payload, process.env.JWT_SECRET);
                res.setHeader("Set-Cookie", serialize("token", token));
                res.end(res.getHeader("Set-Cookie"));
              }
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({
                message: "Error checking password",
                error: err,
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Error checking user",
          error: err,
        });
      });
  };

  const { method } = req;

  switch (method) {
    case "POST":
      login(req, res);
      break;
    default:
      res.status(405).json({
        message: "Method not allowed",
      });
      break;
  }
}
