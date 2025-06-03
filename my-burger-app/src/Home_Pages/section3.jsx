import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Cards from "../components/Cards";
// import "../styles/Homestyle.css";
import { Link } from "react-router-dom";
import Image1 from "../Assets/Food_Assets/assets/menu/burger-11.jpg";
import Image2 from "../Assets/Food_Assets/assets/menu/burger-12.jpg";
import Image3 from "../Assets/Food_Assets/assets/menu/burger-13.jpg";
import Image4 from "../Assets/Food_Assets/assets/menu/burger-14.jpg";
import Image5 from "../Assets/Food_Assets/assets/menu/burger-15.jpg";
import Image6 from "../Assets/Food_Assets/assets/menu/burger-16.jpg";
import Image7 from "../Assets/Food_Assets/assets/menu/burger-17.jpg";
import Image8 from "../Assets/Food_Assets/assets/menu/burger-18.jpg";
import toast, { Toaster } from 'react-hot-toast';


const mockData = [
    {
      id: "0001",
      image: Image1,
      title: "Crispy Chicken",
      paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
      rating: 5,
      price: 99,
    },
    {
      id: "0002",
      image: Image2,
      title: "Ultimate Bacon",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 4.5,
      price: 99.32,
    },
    {
      id: "0003",
      image: Image3,
      title: "Black Sheep",
      paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
      rating: 4,
      price: 69.15,
    },
    {
      id: "0004",
      image: Image4,
      title: "Vegan Burger",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 3.5,
      price: 99.25,
    },
    {
      id: "0005",
      image: Image5,
      title: "Double Burger",
      paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
      rating: 3.0,
      price: 59.25,
    },
    {
      id: "0006",
      image: Image6,
      title: "Turkey Burger",
      paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 3,
      price: 79.18,
    },
    {
      id: "0007",
      image: Image7,
      title: "Smokey House",
      paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 2.5,
      price: 99.19,
    },
    {
      id: "0008",
      image: Image8,
      title: "Classic Burger",
      paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
      rating: 2.0,
      price: 89.12,
    },
    // Add more mock data objects as needed
  ];

  const renderRatingIcons=(rating)=>{
    const stars=[];

    for(let i=0;i<5;i++){
        if(rating > 0.5){
            stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>);
            rating--;
        }else if(rating>0 && rating<1){
            stars.push(<svg key={"half"} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                      <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
                      </svg>);
            rating--;
        }else{
            stars.push(<svg key={`empty${i}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                       <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                       </svg> );
        }
    }
    return stars;
  };

function Section3(){

  // const handleToast = (title) =>toast.success(`Added ${title}`);

    return(
      <>
    {/* <Toaster position="top-center" reverseOrder={false}/> */}
    <section className="menu_section">
            <Container>
                <Row>
                    <Col lg={{ span:8 , offset:2 }} className="text-center mb-5">
                    <h2>Our Crazy Burger</h2>
                    <p className="para">Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Amet nesciunt atque quisquam,
                    </p>
                    </Col>
                </Row>
                <Row>
                    {mockData.map((cardData,index)=>{
                        return(
                            <Cards
                            key={index}
                            id={cardData.id}
                            image={cardData.image}
                            rating={cardData.rating}
                            title={cardData.title}
                            paragraph={cardData.paragraph}
                            price={cardData.price}
                            renderRatingIcons={renderRatingIcons}
                            // handleToast={handleToast}
                            />
                        );
                    })}
                </Row>
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
      </>
        
    );
}

export default Section3;