import Express from 'express'
import HTMLRenderer from './HTMLRenderer';
import {matchRoutes} from 'react-router-dom'
import { RouterConfigs,RouterConfigsComponent } from '../shared/RouterFile';
import reducers from "../shared/Reducer/reducer";
import Thunk from 'redux-thunk'
import 'babel-polyfill'
import proxy from 'express-http-proxy';
import { applyMiddleware, createStore } from "redux";
import Axios from 'axios';

const app = Express();

//just works on client not on server
app.use('/api',proxy('http://react-ssr-api.herokuapp.com/',{
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host']='localhost:3002'
        return opts;
    }
}))

app.use(Express.static('public'));

app.get('/favicon.ico',(req,res)=>{
    res.status(404)
    req.statusCode=404;
    res.send()
})
app.get('*',(req,res)=>{
  
    //for server we need to have base url as it is and for client see in index.js of client /api is used as baseURL for triggering the proxy
        const serverInstance = Axios.create({
            baseURL:'http://react-ssr-api.herokuapp.com/',
            headers: {
                cookie: req.get('cookie') || ''
            }
        })
         const store = createStore(reducers,{},applyMiddleware(Thunk.withExtraArgument(serverInstance)));

   /**
    * loading data in server using routes Config as loadData() is there in most page components.
    *  Before rendering of server file to browser it first load initial data and wait for it to complete once completed then 
    * it send the store with updated data to HTMLRENDERER file
    *  */  
   
    console.log('$hello',matchRoutes(RouterConfigs,req.path));
    let promiseArray = matchRoutes(RouterConfigs,req.path).map(({route})=>{
        return route.loadData ? new Promise((resolve,reject)=>{
            return resolve(route.loadData(store) )
        }): Promise.resolve(null)
    })
   
    Promise.all(promiseArray).then(()=>{
        let context ={}
        let content = HTMLRenderer(req,store)
        if(context.NotFound){
            res.status(404)
        }
        else
        res.send(content)
    }).catch(err=>{
        if(err.response){
            res.send(HTMLRenderer(req,store))
            console.log(err.response.data.message);
        }
        else{
            res.send(HTMLRenderer(req,store))
            console.log(err.message);

        }
    })
})

app.listen(3002,()=>{
    console.log('Server started at 3002');

})