import React from "react"
import { Container,Row,Col,Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import toast, { Toaster } from 'react-hot-toast';

function Cards({id,image,rating,title,paragraph,price,renderRatingIcons}){
    const dispatch = useDispatch();
    const handleToast = (title) =>toast.success(`Added ${title}`);
    
    return(
    <>
        <Toaster position="top-center" reverseOrder={false}/>
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

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="menu_price">
                            <h5 className="mb-0">${price}</h5>
                        </div>
                        <div className="add_to_cart">
                            <Link to="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                </svg>
                                <span
                                onClick={()=>{
                                    // console.log("Dispatching item:", {id, image, rating, title, paragraph, price, qty: 1});
                                    dispatch(addToCart({id,image,rating,title,paragraph,price,qty:1}));
                                    handleToast(title);
                                }}
                                 className="add_to_cart_text">Add to Cart</span>
                            </Link>
                        </div>
                    </div>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Col>
        </>
    );
}

export default Cards;