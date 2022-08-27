import React from "react";
import {css} from 'aphrodite'
import {navStyle} from './navigation.style'
import {Link} from 'react-router-dom'
 function Navigation() {
    return ( 
        <div className={css(navStyle.nav)}>
             <Link to='/' className={css(navStyle.navItem,navStyle.navItemLogo)}>Shrey</Link>
            <Link to='/' className={css(navStyle.navItem)}>Home</Link>
            <Link to='/userList' className={css(navStyle.navItem)}>UserList</Link>
            <a href="/api/auth/google" className={css(navStyle.navItem)}>Login</a>
            <a href='api/logout' className={css(navStyle.navItem)}>Logout</a>
            <Link to={'/admin'} className={css(navStyle.navItem)}>Admin</Link>
        </div>
     );
}


export default Navigation;