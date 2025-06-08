import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import {Nav,Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";


function Section4(){
    return(
        <section className="location-section-about">
            <Container>
                    <div className="hero_text text-center">
                        <h1 className="text-white">Explore Our</h1>
                        <h2 className="text-white">Outlets</h2>
                        {/* <Link to="/" className="btn order_now">Order Now</Link> */}
                        <button className="btn order_now"><Nav.Link as={Link} to="/shop">Explore Now</Nav.Link></button>
                    </div>
            </Container>
        </section>
    );
}

export default Section4;