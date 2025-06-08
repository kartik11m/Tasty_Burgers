import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Cards from "../components/Cards";
// import "../styles/Homestyle.css";
import { Link } from "react-router-dom";



function section3(){
    return(
        <section className="sides_start">
          <h1 className="sides_header text-center">Explore More</h1>
          <div className="promo">
            <Carousel>
      <Carousel.Item className="first_side">
        <Carousel.Caption>
          <div className="first-s">
            <h3 className="first-head">Fresh, Flavorful,Wrapped in Goodness!</h3>
            <p className="first-para">Packed with flavor, wrapped with love—every bite a fresh delight!</p>
            <button className="btn-green">Know More</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="second_side">
        <Carousel.Caption>
          <div className="second-s">
            <h3 className="first-head">Golden, Crispy, Totally Irresistible!</h3>
            <p className="first-para">Crispy on the outside, fluffy on the inside—snacking perfection!</p>
            <button className="btn_red">Know More</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="third_side">
        <Carousel.Caption>
          <div className="third-s">
            <h3 className="first-head">Sip the Sweetness, Love the Chill!</h3>
            <p  className="first-para">
              Creamy, dreamy, and oh-so-smooth—every sip is pure bliss!
            </p>
            <button className="btn-brown">Know More</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    <Container>
        
                <Row className="pt-5">
                                    <Col sm={6} lg={5}>
                                        <div className="ads_box ads_img1 mb-5 mb-md-0">
                                            <h4 className="mb-0">Get Your free</h4>
                                            <h5>Cheese fries</h5>
                                            <Link to="/" className="btn btn_red px-4 rounded-0">
                                            Learn More 
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col sm={6} lg={7}>
                                        <div className="ads_box ads_img2">
                                            <h4 className="mb-0">Get Your free</h4>
                                            <h5>Burger</h5>
                                            <Link to="/" className="btn btn_red px-4 rounded-0">
                                            Learn More 
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
            </Container>
        </section>
    );
}

export default section3;