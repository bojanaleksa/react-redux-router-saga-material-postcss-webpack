import React from "react";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Provider } from "react-redux";
import { store } from "./store.js";
import router from "./router.js";

const muiTheme = getMuiTheme({});

const App = props => <Provider store={store}>
  	<MuiThemeProvider muiTheme={muiTheme}>
      {router}
    </MuiThemeProvider>
  </Provider>;

export default App;
