import Axios from "axios";

const createUser = (user) =>
  new Promise(async (resolve, reject) => {
    await Axios.post("/api/users", user)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });

module.exports = {
  createUser,
};
