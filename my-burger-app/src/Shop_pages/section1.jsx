import React from "react";
import { Container,Row,Col } from "react-bootstrap";

function Section1(){
    return(
        <section className="shop-section">
            <Container>
                <Row>
                    <Col className="s-col">
                    <div className="hero-text text-center">
                        <h1 className="text-white">Our Locations:-</h1>
                        
                        <p className="text-white pt-2 pb-2">
                        1) Oasis Mall, Al Ghubaiba, Sharjah, Dubai
                        </p>
                        <p className="text-white pt-2 pb-2">
                        2) 49 Oxford Street, Sydney, NSW 2010
                        </p>
                        <p className="text-white pt-2 pb-2">
                        3) 18 Old Compton St, Soho, London W1D 4TN
                        </p>
                        <p className="text-white pt-2 pb-2">
                        4) 1-10-4 Shibuya, Maison Du You Bldg. 1F, Shibuya, Tokyo 150-0002
                        </p>
                        {/* <Link to="/" className="btn order_now">Order Now</Link> */}
                        <button className="btn order_now" onClick={(e) => {
                                e.preventDefault(); // Prevent unnecessary page reload
                                document.getElementById("mapSection").scrollIntoView({ behavior: "smooth" }); // Scroll to map
                                }}>Locate Now</button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Section1;