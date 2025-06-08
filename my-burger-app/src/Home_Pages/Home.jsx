import React from "react";
import Layout from "../components/Layout";
import "../styles/Homestyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
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