import Axios from "axios"

export const USERLIST = 'USERLIST'
export const LOGGED_IN = 'LOGGED_IN'

export const userAction =()=>{
   return async (dispatch)=>{
        let userData = await Axios.get('https://react-ssr-api.herokuapp.com/users')
            dispatch({
                type: USERLIST,
                payload: userData.data
            })
    }
}

export const loggedInAction =()=>{
    return async (dispatch)=>{
         let loggedIn = await Axios.get('https://react-ssr-api.herokuapp.com/current_user')
             dispatch({
                 type: LOGGED_IN,
                 payload: loggedIn.data
             })
     }
 }
 
 