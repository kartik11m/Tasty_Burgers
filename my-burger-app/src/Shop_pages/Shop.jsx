import React from "react";
import Layout3 from "../components/Layout2";
import "../styles/Shopstyle.css";
import Section1 from "./section1";
import Section2 from "./section2";
// import Section3 from "./section3";
// import Section4 from "./section4";
// import Section5 from "./section5";
// import Section6 from "./section6";
// import Section7 from "./section7";

function Shop(){
    return(
        <>
        <Layout3>
            {/* Home section hero */}
            <Section1/>
            <Section2/>
            {/* <Section3/> */}
            {/* <Section4/>
            <Section5/> */}
            {/* <Section6/>
            <Section7/> */}
        </Layout3>
        </>
    );
}

export default Shop;