import Navigation from "./Navigation";
import React from "react";
import Footer from "./Footer.jsx";
import Button from '@mui/material/Button';

function App({children}) {
    return ( <React.Fragment>
        <Navigation></Navigation>
        <Button variant="contained">Hello World</Button>
        {children}
        <Footer/>
    </React.Fragment> );
}

export default App;