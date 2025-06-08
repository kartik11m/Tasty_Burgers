import React from "react";
import { Container,Row,Col } from "react-bootstrap";
// import "../styles/Homestyle.css";
import Burger from "../Assets/Food_Assets/assets/hero/hero-2.png"


function Section1(){
    return(
        <section className="menu_start">
            <div className="head_menu">
            <h1 className="text-center text-white">Our famous burgers
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="fire bi bi-fire" viewBox="0 0 16 16">
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                </svg>
            </h1>
            </div>

            <Container>
                <div className="row1">
                    <div className="position-relative">
                        <img src={Burger} alt="Hero" className="burger" />
                        <div className="price_badge">
                            <div className="badge_text">
                                <h4 className="h4_xs">Only</h4>
                                <h4 className="h3_lg">$6.99</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero_text text-center">
                        <h1 className="text-white">Triple Onion</h1>
                        <h2 className="text-white">Loaded Burger</h2>
                        <p className="text-white pt-2 pb-4">
                         Triple Onion Loaded Burger – 
                         A beef patty stacked with crispy onion rings, 
                         grilled onions, and a generous layer of red onions for that fresh crunch.
                          Finished with tangy BBQ sauce and pepper jack cheese on a sesame seed bun.

                        </p>
                        {/* <Link to="/" className="btn order_now">Order Now</Link> */}
                        <button className="btn order_now">Add to cart</button>
                    </div>
                    </div>

                     <div className="row2">
                    <div className="position-relative">
                        <img src="https://bday.mcdonaldsindia.com/wp-content/uploads/2020/02/McSpicy-Paneer-Burger-1-957x1024.png" alt="Hero" className="burger1" />
                        <div className="price_badge">
                            <div className="badge_text">
                                <h4 className="h4_xs">Only</h4>
                                <h4 className="h3_lg">$5.99</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero_text text-center">
                        <h1 className="text-white"> Spicy Paneer</h1>
                        <h2 className="text-white">Burger</h2>
                        <p className="text-white pt-2 pb-4">
                         Spicy Paneer Burger – A fiery twist on a classic favorite! 
                         This burger features a perfectly grilled paneer patty infused with bold spices,
                          topped with crisp lettuce, juicy tomatoes, and a smoky chipotle mayo. 
                          Served in a toasted brioche bun, this one's for spice lovers
                          who crave a satisfying bite with a flavorful kick
                        </p>
                        {/* <Link to="/" className="btn order_now">Order Now</Link> */}
                        <button className="btn order_now">Add to cart</button>
                    </div>
                    </div>

                    <div className="row1">
                    <div className="position-relative">
                        <img src="https://vignette4.wikia.nocookie.net/ronaldmcdonald/images/1/15/Chicken_Maharaja_Mac.png/revision/latest?cb=20151206191043" alt="Hero" className="burger" />
                        <div className="price_badge">
                            <div className="badge_text">
                                <h4 className="h4_xs">Only</h4>
                                <h4 className="h3_lg">$7.99</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero_text text-center">
                        <h1 className="text-white">Maharaja Masala</h1>
                        <h2 className="text-white">Burger</h2>
                        <p className="text-white pt-2 pb-4">
                         Maharaja Masala Burger – 
                         A royal feast! This burger boasts a double-layered spicy paneer 
                         patty with rich makhani sauce, pickled onions, and melted cheese, 
                         served in a golden brioche bun.
                        </p>
                        {/* <Link to="/" className="btn order_now">Order Now</Link> */}
                        <button className="btn order_now">Add to cart</button>
                    </div>
                    </div>


                    <div className="row2">
                    <div className="position-relative">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/034/763/829/small_2x/ai-generated-fried-chicken-burger-free-png.png" alt="Hero" className="burger" />
                        <div className="price_badge">
                            <div className="badge_text">
                                <h4 className="h4_xs">Only</h4>
                                <h4 className="h3_lg">$5.99</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero_text text-center">
                        <h1 className="text-white">Butter Chicken</h1>
                        <h2 className="text-white">Burger</h2>
                        <p className="text-white pt-2 pb-4">
                          Butter Chicken Burger – 
                          A fusion of Indian comfort food and burgers! 
                          Juicy grilled chicken coated in creamy butter chicken sauce, 
                          topped with sautéed onions, fresh lettuce, and served on a toasted bun.
                        </p>
                        {/* <Link to="/" className="btn order_now">Order Now</Link> */}
                        <button className="btn order_now">Add to cart</button>
                    </div>
                    </div>

                   
            </Container>
        </section>
    );
}

export default Section1;