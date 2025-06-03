import React,{useState} from "react";
import "../styles/Headerstyle.css";
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom"
import Logo from "../Assets/Food_Assets/assets/logo/logo.png"
import "../styles/Cart.css"
import {useSelector} from "react-redux"
import ItemCart from "../components/itemCart"

function Header(){
  
    const [nav,setNav]= useState(false);

    // Scroll Navbar
    const changeValueonScroll=()=>{
        const scrollValue= document?.documentElement?.scrollTop;
        scrollValue>100 ? setNav(true):setNav(false);
    };

    window.addEventListener("scroll",changeValueonScroll);



    // cart:-
     const[activeCart,setActiveCart] = useState(true); 
    
    
        const cartItems = useSelector((state)=> state.cart.cart);
    
        
        const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
        // existing item qty + new item quantity
    
    
        const TotalPrice = cartItems.reduce((total,item)=> total+ item.qty*item.price,0);
        // existing total price + current item qty * current item price


    return(
      <>
        <header>
        <Navbar collapseOnSelect expand="lg"  className={`${(nav == true) ? "sticky":""}`}>
      <Container>
        <Navbar.Brand >
            <Link to="/" className="logo">
            <img src={Logo} alt="Logo" className="img-fluid"/>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link> */}
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="">
              <div className="cart">
                <svg
                  onClick={()=>{ setActiveCart(!activeCart)}}
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                  </svg>
                  <em className="roundpoint">{totalQty}</em>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
             <div className={`cart-section ${activeCart? "showCart" : ""}`}>
               <div className="container">
                <div className="cartTab">
                  <h1>Shopping Cart</h1>
                  <div className="listCart">
                      {
                      cartItems.length >0  ?  cartItems.map((food)=>{
                              return(
                                  <ItemCart
                                      key={food.id}
                                      id={food.id}
                                      title={food.title}
                                      price={food.price}
                                      image={food.image}
                                      qty={food.qty}
                                  />
                              )
                          }): <h4 className="Empty-text">Your cart is empty</h4>
                      }
                  </div>
                  <div className="total-c">
                      <h4 className="total-text">Items : {totalQty}</h4>
                      <h4 className="total-text"> Total Amount: ${TotalPrice}</h4>
                  </div>
                  <div className="btn1">
                      <button className="close"
                      onClick={()=>{
                          // console.log("Cart Toggled")
                          setActiveCart(!activeCart)
                      }
                          }
                      >Close</button>
                      <button className="checkOut">
                        <Nav.Link as={Link} to="/CheckOut">Check Out</Nav.Link>
                      </button>
                  </div>
                  </div>
                  </div>
                  </div>
        </>
    );
}

export default Header;

