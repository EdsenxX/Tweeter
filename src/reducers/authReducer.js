const INITIAL_STATE = {
  datosUsuario: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "traerDatosUsuarios":
      return { ...state, datosUsuario: action.payload };
    default:
      return state;
  }
};
