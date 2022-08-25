import Express from 'express'
import HTMLRenderer from './HTMLRenderer';
import {matchRoutes} from 'react-router-dom'
import { RouterConfigs } from '../shared/RouterFile';
import reducers from "../shared/Reducer/reducer";
import Thunk from 'redux-thunk'
import 'babel-polyfill'
import { applyMiddleware, createStore } from "redux";

const app = Express();


app.use(Express.static('public'));

app.get('/favicon.ico',(req,res)=>{
    res.status(404)
    req.statusCode=404;
    res.send()
})
app.get('*',(req,res)=>{
    const store = createStore(reducers,{},applyMiddleware(Thunk));

    console.log('$hello',matchRoutes(RouterConfigs,req.path));
    let promiseArray = matchRoutes(RouterConfigs,req.path).map(({route})=>{
        return route.loadData ? new Promise((resolve,reject)=>{
            return resolve(route.loadData(store) )
        }): Promise.resolve(null)
    })
   
    Promise.all(promiseArray).then(()=>{
        res.send(HTMLRenderer(req,store))
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

app.listen(()=>{
    console.log('Server started at 3002');
app.listen(3002)
})