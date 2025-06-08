import React, { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards1 from "../components/Cards1";
import Image1 from "../Assets/outlets/outlet1.jpeg";
import Image2 from "../Assets/outlets/outlet2.jpeg";
import Image3 from "../Assets/outlets/outlet3.jpeg";
import Image4 from "../Assets/outlets/outlet4.jpeg";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = {
  Dubai: { lat: 25.348819, lng: 55.409649, name: "Oasis Mall, Dubai" },
  Sydney: { lat: -33.8790, lng: 151.2149, name: "49 Oxford Street, Sydney" },
  London: { lat: 51.5133, lng: -0.1313, name: "18 Old Compton St, London" },
  Tokyo: { lat: 35.664035, lng: 139.698212, name: "Shibuya, Tokyo" },
};

// Custom component to update the map's center dynamically
const ChangeCenter = ({ center }) => {
  const map = useMap();
  map.setView(center, 13); // Change map center dynamically
  return null;
};


const mockData = [
    {
      id: "0001",
      image: Image1,
      title: "Location and Contact:-",
      paragraph: "Oasis Mall, Al Ghubaiba, Sharjah, Dubai",
      para:"06 546 7722",
      rating: 5,
      locationKey: "Dubai", // Explicit key for location lookup
    },
    {
      id: "0002",
      image: Image2,
      title: "Location and Contact:-",
      paragraph: "49 Oxford Street, Sydney, NSW 2010",
      para:"04 443 4735",
      rating: 4.5,
      locationKey: "Sydney",

    },
    {
      id: "0003",
      image: Image3,
      title: "Location and Contact:-",
      paragraph: " Old Compton St, Soho, London W1D 4TN",
      para:" 600 500960",
      rating: 4,
      locationKey: "London",
    },
    {
      id: "0004",
      image: Image4,
      title: "Location and Contact:-",
      paragraph: "1-10-4 Shibuya, Maison Du You Bldg. 1F, Shibuya, Tokyo 150-0002",
      para:"058 860 0200",
      rating: 3.5,
      locationKey: "Tokyo",
    },
]

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

function Section2(){
    const [center, setCenter] = useState([locations.Dubai.lat, locations.Dubai.lng]);
    return(
        <>
        <section className="shop-outlet">
            <Container>
                <Row>
                    <Col lg={{ span:8 , offset:2 }} className="text-center mb-5">
                    <img src="https://img.freepik.com/premium-vector/shopping-visor-modern-abstract-illustration-vector-illustration_833641-1502.jpg?uid=R201364834&ga=GA1.1.941549983.1747749665&w=740" alt="" className="img-fluid out"/>
                    <h2>Our Outlets</h2>
                    <p className="para">Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Amet nesciunt atque quisquam,
                    </p>
                    </Col>
                </Row>
                <Row>
                    {mockData.map((cardData,index)=>{
                        return(
                            <Cards1
                            key={index}
                            image={cardData.image}
                            rating={cardData.rating}
                            title={cardData.title}
                            paragraph={cardData.paragraph}
                            para={cardData.para}
                            renderRatingIcons={renderRatingIcons}
                            setCenter={setCenter} // Pass setCenter function
                            locationData={locations[cardData.locationKey]} // Correct lookup
                            />
                        );
                    })}
                </Row>
            </Container>
        </section>
        <section id="mapSection" className=" map-section text-center">
                <h1 className="mh pb-5">Map</h1>
              <MapContainer center={center} zoom={13} style={{ height: "400px", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <ChangeCenter center={center} />
                {Object.values(locations).map((loc, index) => (
                  <Marker key={index} position={[loc.lat, loc.lng]}>
                    <Popup>{loc.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
        
              <div className="shop-but">
                {Object.keys(locations).map((location) => (
                  <button className="btn btn-red" key={location} onClick={() => setCenter([locations[location].lat, locations[location].lng])}>
                    {location}
                  </button>
                ))}
              </div>
            </section>
        </>
    );
}

export default Section2;