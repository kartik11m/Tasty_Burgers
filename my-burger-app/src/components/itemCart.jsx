import "../styles/Cart.css"
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { removeFromCart,incrementQty,decrementQty } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";

function itemCart({id,title,price,image,rating,qty}){

    const dispatch = useDispatch();
    const notify = () => toast(`${title} Removed!`, { icon: "👋" });

    return(
        <>
            <div class="item">
                 <div class="image">
                    <img src={image} alt={title} />
                </div>
                <div class="name">{title}</div>
                
                <div class="totalPrice">${price*qty}</div>
                <div class="quantity">
                    <span 
                    onClick={()=>{
                        // console.log("clicked -");
                        dispatch(decrementQty({id}))
                    }}
                    class="minus">-</span>
                    <span>{qty}</span>
                    <span 
                    onClick={()=>{
                        // console.log("clicked +");
                        dispatch(incrementQty({id}))}}
                    class="plus">+</span>
                    
                </div>
                    <span className="delete-c"
                    onClick={()=>{


                        dispatch(removeFromCart({id}));
                        // sirfh id se bhi kaam hojayega
                        notify();
                    //    toast(`${title} Removed!`,{
                    //     icon: "👋",
                    //    });
                    }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                        </svg>
                    </span>
            </div>
            
        </>
    );
}

export default itemCart;