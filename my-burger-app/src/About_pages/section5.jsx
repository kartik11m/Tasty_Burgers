import React from "react";
import { Container,Row,Col,Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../Assets/Food_Assets/assets/shop/appstore.png";
import StoreGoogle from "../Assets/Food_Assets/assets/shop/googleplay.png";
import Download from "../Assets/Food_Assets/assets/shop/e-shop.png"

function Section5(){
    return(
        <>
        <h1 className="shop_head text-center">App Available on:-</h1>
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
        </>
    );
}

export default Section5;