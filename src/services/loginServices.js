import Axios from "axios";

const login = (user) =>
  new Promise(async (resolve, reject) => {
    await Axios.post("/api/login", user)
      .then((res) => {
        resolve({
          message: "Login successful",
          status: {
            code: res.status,
            message: res.statusText,
          },
        });
        document.cookie = res.data;
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });

const getData = (token) =>
  new Promise(async (resolve, reject) => {
    await Axios.post("/api/auth", { withCredentials: true })
      .then((res) => {
        resolve(res.data.results);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });

module.exports = {
  login,
  getData,
};
