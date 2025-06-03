import React, { useState } from "react";
import { Container,Row,Col,Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Cards({image,rating,title,paragraph,renderRatingIcons,para,setCenter, locationData}){
    return(
        <Col sm={6} lg={4} xl={3} className="mb-4">
            <Card className="overflow-hidden">
                <div className="overflow-hidden">
                    {/* for applying zoom hover effect on image we use this class */}
                    <Card.Img variant="top" src={image} />
                </div>
                <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="item_rating">{renderRatingIcons(rating)}</div>
                        <div className="wishlist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                        </div>
                    </div>
                 <Card.Title>{title}</Card.Title>
                    <Card.Text>{paragraph}</Card.Text>
                    <Card.Text>{para}</Card.Text>

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="add_to_cart">
                            <Link onClick={(e) => {
                                e.preventDefault(); // Prevent unnecessary page reload
                                setCenter([locationData.lat, locationData.lng])
                                document.getElementById("mapSection").scrollIntoView({ behavior: "smooth" }); // Scroll to map
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                <span className="add_to_cart_text">Locate Now</span>
                            </Link>
                        </div>
                    </div>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Cards;