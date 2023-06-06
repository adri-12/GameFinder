import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// REDUX SETUP
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.jsx";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: composeEnchancer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
