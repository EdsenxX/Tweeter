import { getData } from "../services/loginServices";

export const traerDatosUsuario = () => async (dispatch) => {
  let token = document.cookie.split("=")[1];
  let datosUsuario = [];
  await getData(token)
    .then((res) => {
      datosUsuario = res;
    })
    .catch((err) => {
      console.log(err);
      datosUsuario = [];
    });

  dispatch({
    type: "traerDatosUsuarios",
    payload: datosUsuario,
  });
};

export const cerrarSesion = () => async (dispatch) => {
  dispatch({
    type: "traerDatosUsuarios",
    payload: [],
  });
};
