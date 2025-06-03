import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout3({children}){
    return(
        <div>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    );
}

export default Layout3;