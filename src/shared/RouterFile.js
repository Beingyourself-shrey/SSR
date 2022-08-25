import React from "react";
import Home from "../client/page/Home";
import UserList from "../client/page/UserList";
import { Route, Routes } from 'react-router-dom'

function RouterFile() {
    return (
         <Routes>
              {RouterConfigs.map(route=>{
                return <Route key={route.path} path={route.path} element={<route.component/>} exact={route.exact}/>
              })}
          </Routes> );
}

export default RouterFile;
export const RouterConfigs = [
    {
        path: '/',
         ...Home,
        exact: true,

    },
    {
        path: '/userlist',
        ...UserList,
        exact: true,
    }
]

