import dbConnect from "../../../utils/db";
import User from "../../../models/User";
import { paramsBuilder } from "../../../utils/helpers";

export default async function handler(req, res) {
  await dbConnect();

  const getUsers = async (req, res) => {
    const users = await User.find().select([
      "-password",
      "-email",
      "-createdAt",
      "-updatedAt",
    ]);
    res.status(200).json({
      message: "Extracted users",
      results: users,
      status: {
        code: 200,
        message: "OK",
      },
    });
  };

  const createUser = async (req, res) => {
    console.log(req.body);
    console.log("hola");
    const validParams = [
      "name",
      "userName",
      "email",
      "password",
      "description",
    ];
    let params = paramsBuilder(validParams, req.body);
    await User.create(params)
      .then((user) => {
        res.status(201).json({
          message: "User created",
          results: user,
          status: {
            code: 201,
            message: "Created",
          },
        });
      })
      .catch((err) => {
        console.error("Hiiii tu chingadera no se creo");
        if (err.code === 11000) {
          res.status(400).json({
            message: `${Object.keys(err.keyPattern)[0]} already exists`,
            status: {
              code: 400,
              message: "Bad Request",
            },
            error: {
              code: err.code,
              message: err.message,
              duplicatedKey: Object.keys(err.keyPattern)[0],
            },
          });
        } else {
          res.status(500).json({
            message: "Error creating user",
            results: err,
            status: {
              code: 500,
              message: "Error",
            },
          });
        }
      });
  };

  const { method } = req;

  switch (method) {
    case "GET":
      return getUsers(req, res);
    case "POST":
      return createUser(req, res);
    default:
      return res.status(405).json({
        message: `Method ${method} not allowed.`,
        status: {
          code: 405,
          message: `Method ${method} not allowed.`,
        },
      });
  }
}
