import React from "react";
import { renderToString } from 'react-dom/server'
import ErrorBoundry from '../client/component/ErrorBoundry';
import { StaticRouter } from 'react-router-dom/server'
import  { RouterConfigsComponent } from "../shared/RouterFile";
import { Provider } from "react-redux";
import App from "../client/component/App";
import { StyleSheetServer } from 'aphrodite';
import {createTheme,ThemeProvider} from '@mui/material/styles'
import serializeJavascript from 'serialize-javascript'
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
                        <StaticRouter location={req.path}>
                            <React.Fragment>
                                <App>
                                   {<RouterConfigsComponent/>}
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
            window.INITIAL_STORE=${serializeJavascript(store.getState())}
            </script>
            <script src="bundle.js"></script>
           
        </body>
    </html>
    `

    return content;
}


export default HTMLRenderer;
