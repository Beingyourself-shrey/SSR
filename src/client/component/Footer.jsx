import {style} from './footer.style'
import React from "react";
import {css} from 'aphrodite'
function Footer() {
    return ( <div className={css(style.footer)}>
        I am footer
       
    </div> );
}

export default Footer;