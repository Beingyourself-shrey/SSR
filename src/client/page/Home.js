import React, { useEffect } from "react";
import { connect } from "react-redux";
import {loggedInAction} from '../../shared/Actions/action'
function Home({loggedIn,dispatch}) {
    useEffect(()=>{
        dispatch(loggedInAction())
    },[])
    return ( <div className="shrey">My Home {loggedIn}</div> );
}
const maoStateToProps =({loggedIn})=>{
    return {
        loggedIn: loggedIn
    }
}
const loadData=(store)=>{
    return store.dispatch(loggedInAction())
}
export default {
    component: connect(maoStateToProps)(Home),
    loadData
};