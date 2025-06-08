import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import {Nav,Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";


function Section3(){
    return(
        <>
        <h1 className="quality-head text-center">Quality of our products</h1>
        <section className="quality-section">
            <Container>
                <Row>
                    <Col lg={5}>
                    <div className="hero_text text-center">
                        <h1 className="text-black">Quality</h1>
                        {/* <h2 className="text-white">Us</h2> */}
                        <p className="text-black pt-2 pb-4">
                        At Tasty Burgers, quality is at the heart of everything we do. From the freshest ingredients to our expert cooking techniques, we ensure every burger is crafted to perfection.
                        We source only the finest, locally grown produce and premium cuts of meat to guarantee maximum flavor and freshness. Our patties are perfectly seasoned and flame-grilled to bring out that irresistible smoky taste. Each bun is toasted to golden perfection, complementing the rich, juicy filling inside.
                        No shortcuts, no compromises—just real, wholesome ingredients made with care. Whether you're savoring a classic favorite or indulging in something bold and new, every bite delivers quality, freshness, and flavor you can trust.
                        Because at Tasty Burgers, great taste begins with great ingredients.
                        </p>
                        {/* <Link to="/" className="btn order_now">Order Now</Link> */}
                        <button className="btn order_now">Know More</button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}

export default Section3;