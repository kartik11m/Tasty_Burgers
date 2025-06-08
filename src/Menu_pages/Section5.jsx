import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Cards from "../components/Cards";
// import "../styles/Homestyle.css";
// import { Link } from "react-router-dom";
import Image1 from "../Assets/beverages/americano.jpg";
import Image2 from "../Assets/beverages/cappucino.jpg";
import Image3 from "../Assets/beverages/espresso2.jpg";
import Image4 from "../Assets/beverages/latte.jpg";
import Image5 from "../Assets/beverages/mocha.jpg";
import Image6 from "../Assets/beverages/- Strawberry Bliss Shake.jpg";
import Image7 from "../Assets/beverages/chocolate-shake.jpg";
import Image8 from "../Assets/beverages/- Oreo Cookies & Cream Shake.jpg";
import Image9 from "../Assets/beverages/- Classic Vanilla Shake.jpg";
import Image10 from "../Assets/beverages/- Banana Caramel Shake1.jpg";


const mockData = [
    {
      id: "0020",
      image: Image1,
      title: "Americano",
      paragraph: "  A bold and smooth espresso-based coffee, diluted with hot water to enhance its rich, deep flavors. Perfect for those who love a strong, yet balanced cup.",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0021",
      image: Image2,
      title: "Cappucino",
      paragraph: "A harmonious blend of rich espresso, steamed milk, and a thick layer of velvety foam. A classic choice for those who enjoy a creamy yet bold coffee experience.",
      rating: 4.5,
      price: 99.32,
    },
    {
      id: "0022",
      image: Image5,
      title: "Mocha",
      paragraph: "A luxurious fusion of bold espresso, creamy steamed milk, and rich chocolate, delivering a smooth and indulgent coffee experience. Perfect for those who love a sweet yet robust flavor.",
      rating: 4,
      price: 69.15,
    },
    {
      id: "0023",
      image: Image4,
      title: "Latte",
      paragraph: "Smooth espresso blended with creamy steamed milk, topped with a light layer of foam for a mellow and comforting coffee experience.",
      rating: 3.5,
      price: 99.25,
    },
    {
      id: "0024",
      image: Image9,
      title: "Classic Vanilla Shake",
      paragraph: "A creamy and indulgent blend of rich vanilla ice cream and smooth milk, creating a perfectly sweet and refreshing treat. Simple, timeless, and satisfying.",
      rating: 3.0,
      price: 59.25,
    },
    {
      id: "0025",
      image: Image10,
      title: "Banana Caramel Shake",
      paragraph: "A luscious blend of ripe bananas and rich caramel, perfectly mixed with creamy ice cream for a smooth, sweet, and indulgent treat.",
      rating: 3.5,
      price: 5.99,
    },
    {
      id: "0026",
      image: Image7,
      title: "Chocolate Shake",
      paragraph: "A rich and creamy blend of velvety chocolate and smooth ice cream, delivering a decadent and satisfying treat. Perfect for chocolate lovers!",
      rating: 2.5,
      price: 99.19,
    },
    {
      id: "0027",
      image: Image8,
      title: "Oreo Cookies & Cream Shake",
      paragraph: "A delightful blend of creamy vanilla ice cream and crunchy Oreo cookies, creating a smooth, rich, and irresistibly sweet treat.",
      rating: 2.0,
      price: 89.12,
    },
    // Add more mock data objects as needed
    {
      id: "0028",
      image: Image3,
      title: "Espresso",
      paragraph: "A strong, concentrated coffee brewed under high pressure, delivering a rich, bold flavor with a smooth crema. Perfect for those who love an intense and aromatic coffee experience.",
      rating: 2.0,
      price: 89.12,
    },
    {
      id: "0029",
      image: Image6,
      title: "Strawberry Bliss Shake",
      paragraph: "A refreshing mix of sweet strawberries and creamy vanilla ice cream, blended to smooth perfection for a fruity, indulgent treat.",
      rating: 2.0,
      price: 89.12,
    },
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

function Section5(){
    return(
        <section className="menu_section">
            <Container>
                <Row>
                    <Col lg={{ span:8 , offset:2 }} className="text-center mb-5">
                    <h2>Beverages</h2>
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
                            />
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Section5;