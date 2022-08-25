import React from "react";
import { renderToString } from 'react-dom/server'
import ErrorBoundry from '../client/component/ErrorBoundry';
import { StaticRouter } from 'react-router-dom/server'
import RouterFile from "../shared/RouterFile";
import { Provider } from "react-redux";
import App from "../client/component/App";
import { StyleSheetServer } from 'aphrodite';
import {createTheme,ThemeProvider} from '@mui/material/styles'
import {blue,red} from '@mui/material/colors'

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

const HTMLRenderer = (req, store) => {

    const { html, css } = StyleSheetServer.renderStatic(() => {
        return renderToString(
            <ErrorBoundry>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                    <StaticRouter context={{}} location={req.path}>
                        <React.Fragment>
                            <App>
                                <RouterFile />
                            </App>
                        </React.Fragment>
                    </StaticRouter>
                    </ThemeProvider>
                </Provider>
            </ErrorBoundry>
        )
    })
    const content = `
    <html>
        <head>
        <title>
            SSR WITH LATEST VERSION
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
        <style>
        *{
            padding:0px;
            margin: 0px;
            box-sizing:border-box;
            font-family: 'Roboto, sans-serif';
        }
        a{
            text-decoration:none;

        }
        a:hover{
            text-decoration:none;
            color:inherit;
        }
        a:active{
                text-decoration:none;
                color:inherit;
            
        }

        a:visited{
            text-decoration:none;
            color:inherit;
        
    }

        </style>
        <style data-aphrodite>
        ${css.content}
        </style>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            window.INITIAL_STORE=${JSON.stringify(store.getState())}
            </script>
            <script src="bundle.js"></script>
           
        </body>
    </html>
    `

    return content;
}


export default HTMLRenderer;
