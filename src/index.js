import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// rootReducer from ./reducers
import rootReducer from "./reducers";


// thunk from redux-thunk
import thunk from 'redux-thunk';
// logger from redux-logger
import logger from 'redux-logger';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
