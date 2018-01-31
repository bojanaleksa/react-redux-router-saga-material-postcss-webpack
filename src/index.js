import "babel-polyfill";
import './stylesheets/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from "react-redux";
import { store } from "./store.js";
import router from "./router.js";

ReactDOM.render(
  <Provider store={store}>
  	<MuiThemeProvider>
      {router}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
