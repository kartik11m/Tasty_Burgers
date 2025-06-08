import React, { useState , useEffect } from "react";
import { Container,Row,Col,Carousel } from "react-bootstrap";
import {Link} from "react-router-dom";

function Section1(){
    // const [loading , setLoading] = useState(true);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setLoading(false);
    //     },3000);
    // },[]);
    return(
        <>
        <section className="CheckOut-section">
            {
                // loading ? ({/* <PropagateLoader color="36d7b7"/> */}):()
            }
            <Container>
                
                <div className="checkout-text text-center ">
                    <h1 className="text-black ck-head ">Ordered Successfully</h1>
                        <button className="btn order_now">
                            <Link to="/">Back</Link>
                        </button>
                </div>
            </Container>
        </section>
        </>
    );
}

export default Section1;