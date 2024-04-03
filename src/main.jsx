import { createRoot } from "react-dom"; // Importe createRoot em vez de ReactDOM.render
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "./index.css";
import "./global.css";

import App from "./App";

const root = createRoot(document.getElementById("root")); // Use createRoot para criar o root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
