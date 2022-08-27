
import React from "react";
import Home from "../client/page/Home";
import UserList from "../client/page/UserList";
import { Route, Routes, useRoutes } from 'react-router-dom'
import NotFound from "../client/component/NotFound";


export const RouterConfigs = [
    {
        path: '/',
        element: <Home.element/> ,
        loadData:Home.loadData,
        exact: true,

    },
    {
        path: '/userlist',
        element: <UserList.element/> ,
        loadData:UserList.loadData,
        exact: true,
    },
    {
        path: '*',
        element:<NotFound.element/>,
        exact: true,
    }
]


export const RouterConfigsComponent = ()=>useRoutes(RouterConfigs)
