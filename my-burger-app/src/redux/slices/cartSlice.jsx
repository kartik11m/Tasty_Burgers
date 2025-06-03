import {createSlice} from "@reduxjs/toolkit"


const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
};


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: loadCartFromStorage(), // Load persisted cart when Redux initializes

    },

    reducers: {
        addToCart : (state,action)=>{
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            // state.cart.push(action.payload);
            if(existingItem){
                state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item,qty : item.qty+1}:item)
            }else{
                state.cart.push(action.payload);
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));

        },
        removeFromCart : (state,action)=>{
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
            localStorage.setItem("cart", JSON.stringify(state.cart));

        },

        incrementQty: (state,action)=>{
            state.cart = state.cart.map((item)=>item.id === action.payload.id ? {...item, qty:item.qty+1}:item)
            localStorage.setItem("cart", JSON.stringify(state.cart));

        },

        decrementQty: (state,action)=>{
            state.cart = state.cart.map((item)=>item.id === action.payload.id && item.qty>1 ? {...item, qty:item.qty-1}:item)
            localStorage.setItem("cart", JSON.stringify(state.cart));

        },

    },
});

export const{addToCart , removeFromCart, incrementQty, decrementQty} = cartSlice.actions;
export default cartSlice.reducer;