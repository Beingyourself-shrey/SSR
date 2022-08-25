import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import RouterFile from "../shared/RouterFile";
import Thunk from 'redux-thunk'
import ErrorBoundry from '../client/component/ErrorBoundry'
import { applyMiddleware, createStore } from "redux";
import reducers from "../shared/Reducer/reducer";
import { Provider } from "react-redux";
import App from './component/App'
import {createTheme,ThemeProvider} from '@mui/material/styles'
import {blue,red} from '@mui/material/colors'
import 'babel-polyfill'

const store = createStore(reducers, window.INITIAL_STORE, applyMiddleware(Thunk));
const theme = createTheme({
    palette: {
      primary: {
        main: blue[800],
      },
      secondary: {
        main: red[500],
      },
    },
  });
createRoot(document.getElementById("root")).render(<ErrorBoundry>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
        <BrowserRouter>
            <React.Fragment>
                <App>
                    <RouterFile />
                </App>
            </React.Fragment>
        </BrowserRouter>
        </ThemeProvider>
    </Provider>
</ErrorBoundry>);

