import Axios from "axios"

export const USERLIST = 'USERLIST'
export const LOGGED_IN = 'LOGGED_IN'

export const userAction =()=>{
   return async (dispatch,getState,api)=>{
        let userData = await api.get('users')
            dispatch({
                type: USERLIST,
                payload: userData.data
            })
    }
}

export const loggedInAction =()=>{
    return async (dispatch,getState,api)=>{
         let loggedIn = await api.get('current_user')
             dispatch({
                 type: LOGGED_IN,
                 payload: loggedIn.data
             })
     }
 }
 
 