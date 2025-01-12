import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import App from "./App";
import { counterReducer } from "../src/Componenets/Redux/CounterReducer";

// Combine reducers (ensure it's `combineReducers`)
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);