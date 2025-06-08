import React, { useState,useEffect } from "react";
import "../styles/Cart.css"
import {useSelector} from "react-redux"
import ItemCart from "../components/itemCart"
import {Link} from "react-router-dom";

function Cart(){

    const[activeCart,setActiveCart] = useState(true); 


    const cartItems = useSelector((state)=> state.cart.cart);

    // Load cart from local storage when the component mounts
    // useEffect(() => {
    //     const savedCart = localStorage.getItem("cart");
    //     if (savedCart) {
    //         dispatch(setCart(JSON.parse(savedCart))); // Ensure that the Redux updates state with stored cart
    //     }
    // }, [dispatch]); // Runs once when the component mounts

    // // Save cart to local storage whenever it updates
    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cartItems));
    // }, [cartItems]);



    const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
    // existing item qty + new item quantity


    const TotalPrice = cartItems.reduce((total,item)=> total+ item.qty*item.price,0);
    // existing total price + current item qty * current item price


    // console.log(cartItems);
//     console.log("Cart Items:", cartItems);
// cartItems.forEach((item) => console.log("Cart Item ID:", item.id));
    return(
        <>
        <button
        onClick={()=>{ setActiveCart(!activeCart)}}
         className={`addCart  ${totalQty > 0 ? "btn btn-warning" : "btn btn-secondary"}`}>
        {/*   "animate-bounce delay-500 transition-all":""; */}
                    Add to cart
                </button>
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
                }): <h3>Your cart is empty</h3>
            }
        </div>
        <div className="total-c">
            <h3>Items : {totalQty}</h3>
            <h3>Total Amount: ${TotalPrice}</h3>
        </div>
        <div className="btn1">
            <button className="close"
            onClick={()=>{
                console.log("Cart Toggled")
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

export default Cart;