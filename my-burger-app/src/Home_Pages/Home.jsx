import React from "react";
import Layout from "../components/Layout";
import "../styles/Homestyle.css";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
// import Cart from "../components/Cart"

function Home(){
    return(
        <>
        <Layout>
            {/* Home section hero */}
            <Section1/>
            {/* <Cart/> */}
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
        </Layout>
        </>
    );
}

export default Home;