import React from "react";
import Layout1 from "../components/Layout1";
import "../styles/Menustyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
// import Section2 from "./Section2";
// import Section3 from "./section3";
// import Section4 from "./section4";
// import Section5 from "./section5";
// import Section6 from "./section6";
// import Section7 from "./section7";

function Menu(){
    return(
        <>
        <Layout1>
            {/* Menu section*/}
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            {/* <Section2/> */}
            {/* <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/> */}
        </Layout1>
        </>
    );
}

export default Menu;