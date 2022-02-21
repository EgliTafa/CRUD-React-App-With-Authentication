import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configStore from "./store/store";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

const domain = "dev-4se3zjs6.eu.auth0.com";
const clientId = "KBo4tGJBKPCor6wMw72SHMDjvyHsTyCx";

const store = configStore({});

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <Provider
    store={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>
  </Auth0Provider>,
  rootElement
);

registerServiceWorker();
