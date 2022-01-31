import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "../reducers";

const store = createStore(
  reducers, // Todos los reducers
  {}, // Estado inical
  applyMiddleware(reduxThunk)
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
