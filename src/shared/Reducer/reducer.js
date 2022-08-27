import { combineReducers } from "redux";
import { USERLIST,LOGGED_IN } from "../Actions/action";

export const userReducer = (state=[],action)=>{
    switch(action.type){
        case USERLIST: 
            return action.payload
         default:
            return state;
    }
}
export const loggedinReducer = (state="",action)=>{
    switch(action.type){
        case LOGGED_IN: 
            return action.payload ? action.payload : false
         default:
            return state;
    }
}

const reducers=combineReducers({user:userReducer,loggedIn:loggedinReducer})
export default reducers