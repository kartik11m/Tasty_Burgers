import React from "react";
import Layout2 from "../components/Layout2";
import "../styles/Aboutstyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
// import Section6 from "./section6";
// import Section7 from "./section7";

function About(){
    return(
        <>
        <Layout2>
            {/* Home section hero */}
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            {/* <Section6/>
            <Section7/> */}
        </Layout2>
        </>
    );
}

export default About;
