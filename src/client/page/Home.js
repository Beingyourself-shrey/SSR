import React, { useEffect } from "react";
import { connect } from "react-redux";
import {loggedInAction} from '../../shared/Actions/action'
function Home({loggedIn,dispatch}) {
    useEffect(()=>{
        dispatch(loggedInAction())
    },[])
    return ( <div className="shrey">My Home {JSON.stringify(loggedIn)}</div> );
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
    element: connect(maoStateToProps)(Home),
    loadData
};