import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home_Pages/Home"
import Menu from "./Menu_pages/Menu"
import About from "./About_pages/About"
import Shop from "./Shop_pages/Shop"
import Contact from "./Contact_pages/Contact"
import CheckOut from "./CheckOut_pages/CheckOut";

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/CheckOut" element={<CheckOut/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;