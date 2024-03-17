import { ConnectedRouter } from "connected-react-router";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./stores";
import { history } from "./utils/history";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ToastContainer />
      <App />
    </ConnectedRouter>
  </Provider>
);

reportWebVitals();