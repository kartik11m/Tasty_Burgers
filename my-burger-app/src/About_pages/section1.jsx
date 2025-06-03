import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import image1 from "../Assets/outlets/collage-about.png"


function Section1(){
    return(
        <section className="about-section">
            <Container>
                <Row>
                    <Col className="about-collage">
                    <div className="about-coll">
                        <img src={image1} alt="Hero" />
                    </div>
                    </Col>
                    <Col className="about-hero">
                    <div className="hero_text text-center">
                        <h1 className="text-white">About</h1>
                        <h2 className="text-white">Us</h2>
                        <p className="text-white pt-2 pb-4">
                        Welcome to Tasty Burgers, where bold flavors meet fresh ingredients to create the ultimate burger experience! Our mission is simple: serve up handcrafted, high-quality burgers that bring people together over great food.
                        Every burger we make starts with premium, locally sourced ingredients—juicy, flame-grilled patties, fresh veggies, and perfectly toasted buns. Whether you're craving a timeless classic or an adventurous twist, we craft each burger with care, ensuring every bite is packed with flavor.
                        But Tasty Burgers is more than just a restaurant—it's a place where good food meets good company. Our cozy, welcoming atmosphere makes it the perfect spot to enjoy a satisfying meal, whether you're dining in or grabbing a quick bite on the go.
                        So if you're hungry for something delicious, fresh, and made with passion, you've come to the right place. Dive into the world of Tasty Burgers, where every burger is a masterpiece!

                        </p>
                        {/* <Link to="/" className="btn order_now">Order Now</Link> */}
                        <button className="btn order_now">Know More</button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Section1;