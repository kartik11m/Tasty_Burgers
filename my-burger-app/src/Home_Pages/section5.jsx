import React from "react";
import { Container,Row,Col,Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../Assets/Food_Assets/assets/shop/appstore.png";
import StoreGoogle from "../Assets/Food_Assets/assets/shop/googleplay.png";
import Download from "../Assets/Food_Assets/assets/shop/e-shop.png"
import Brand1 from "../Assets/Food_Assets/assets/brands/brand-11.png"
import Brand2 from "../Assets/Food_Assets/assets/brands/brand-12.png"
import Brand3 from "../Assets/Food_Assets/assets/brands/brand-13.png"
import Brand4 from "../Assets/Food_Assets/assets/brands/brand-14.png"
import Brand5 from "../Assets/Food_Assets/assets/brands/brand-15.png"
import Brand6 from "../Assets/Food_Assets/assets/brands/brand-16.png"
import Brand7 from "../Assets/Food_Assets/assets/brands/brand-17.png"
import Brand8 from "../Assets/Food_Assets/assets/brands/brand-18.png"

function Section5(){
    return(
        <>
        <section className="shop_section">
            <Container>
                <Row>
                    <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                    <h4>Download mobile App and</h4>
                    <h2>save upto 20%</h2>
                    <p>Aliquam a augue suscipit, luctus neque purus ipsum and neque
                    dolor primis libero tempus, blandit varius</p>
                    <Link to="/">
                    <img src={StoreIOS} alt="IOS" className="img-fluid store me-3" />
                    </Link>
                    <Link to="/">
                    <img src={StoreGoogle} alt="Android" className="img-fluid store me-3" />
                    </Link>
                    </Col>
                    <Col lg={6}>
                    <img src={Download} alt="e-shop" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="brand_section">
            <Container>
                <Row>
                  <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="d-flex align-items-center justify-content-between">
                            <div className="brand_img">
                                    <img src={Brand1} alt="brand-1" className="img-fluid"/>
                                </div>
                                <div className="brand_img">
                                    <img src={Brand2} alt="brand-2" className="img-fluid"/>
                                </div>
                                <div className="brand_img">
                                    <img src={Brand3} alt="brand-3" className="img-fluid"/>
                                </div>
                                <div className="brand_img">
                                    <img src={Brand4} alt="brand-4" className="img-fluid"/>
                                </div>
                                <div className="brand_img">
                                    <img src={Brand7} alt="brand-7" className="img-fluid"/>
                                </div>
                                <div className="brand_img">
                                    <img src={Brand8} alt="brand-8" className="img-fluid"/>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="d-flex align-items-center justify-content-between">
                               <div className="brand_img">
                                    <img src={Brand1} alt="brand-1" className="img-fluid"/>
                                </div>
                                <div className="brand_img">
                                    <img src={Brand2} alt="brand-2" className="img-fluid"/>
                                </div>
                                <div className="brand_img">
                                    <img src={Brand5} alt="brand-5" className="img-fluid"/>
                                </div>
                                <div className="brand_img">
                                    <img src={Brand6} alt="brand-6" className="img-fluid"/>
                                </div>
                                <div className="brand_img">
                                    <img src={Brand7} alt="brand-7" className="img-fluid"/>
                                </div>
                                <div className="brand_img">
                                    <img src={Brand8} alt="brand-8" className="img-fluid"/>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>
        </>
    );
}

export default Section5;