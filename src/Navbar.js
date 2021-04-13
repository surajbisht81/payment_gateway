import React from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";

function Navbar() {

    const handlePayment = () => {
        window.location = "https://rzp.io/l/ooqHjM7";
    }

    return (
        <div className="navbar">

            <h1 onClick={handlePayment}> Donate </h1>

            <div className="right__part">
                <NavLink to="/"><h3> Home </h3></NavLink>
                <NavLink to="/About"><h3> About </h3></NavLink>
                <NavLink to="/Contact"><h3> Contact </h3></NavLink>
            </div>
        </div>
    )
}

export default Navbar
