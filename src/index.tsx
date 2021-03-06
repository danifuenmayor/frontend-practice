import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import { App } from "./components";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core/styles";
import { store, persistor } from "./store";
import theme from "./components/theme";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
