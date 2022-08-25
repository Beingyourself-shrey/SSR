import React, { useEffect } from "react";
import { connect } from "react-redux";
import { userAction } from "../../shared/Actions/action";

function UserList({users,dispatch}) {
    useEffect(()=>{
        dispatch(userAction())
    },[])
    return ( 
        <div>
            I am UserList
            <ul>
                {users.map(user=>{
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </div>
      );
}
const mapStateToProps =({user})=>{
    return {users :user}
}
const loadData=(store)=>{
return store.dispatch(userAction())
}

export default {
    component: connect(mapStateToProps)(UserList),
    loadData
}
