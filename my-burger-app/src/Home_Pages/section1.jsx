import React from "react";
import { Container,Row,Col } from "react-bootstrap";
// import "../styles/Homestyle.css";
import Burger from "../Assets/Food_Assets/assets/hero/hero-2.png"


function Section1(){
    return(
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg={7} className="mb-5 mb-lg-0">
                    <div className="position-relative">
                        <img src={Burger} alt="Hero" className="img-fluid" />
                        <div className="price_badge">
                            <div className="badge_text">
                                <h4 className="h4_xs">Only</h4>
                                <h4 className="h3_lg">$6.99</h4>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col lg={5}>
                    <div className="hero_text text-center">
                        <h1 className="text-white">New Burgers</h1>
                        <h2 className="text-white">With Onions</h2>
                        <p className="text-white pt-2 pb-4">
                        Feugiat primis ligula risus auctor laoreet augue egestas mauris
                        viverra tortor in iaculis pretium at magna mauris ipsum primis
                        rhoncus feugiat
                        </p>
                        {/* <Link to="/" className="btn order_now">Order Now</Link> */}
                        <button className="btn order_now">Order Now</button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Section1;