import React from "react";
import {css} from 'aphrodite'
import {navStyle} from './navigation.style'
import {Link} from 'react-router-dom'
 function Navigation() {
    return ( 
        <div className={css(navStyle.nav)}>
             <div className={css(navStyle.navItem,navStyle.navItemLogo)}>Shrey</div>
            <Link to='/' className={css(navStyle.navItem)}>Home</Link>
            <Link to='/userList' className={css(navStyle.navItem)}>UserList</Link>
            <Link to='' className={css(navStyle.navItem)}>Login</Link>
            <Link to='' className={css(navStyle.navItem)}>Logout</Link>
        </div>
     );
}


export default Navigation;