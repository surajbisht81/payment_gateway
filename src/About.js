import React from 'react';
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
    return (
        <div className="about">
            <Navbar />
            <div className="about__info">
                <h2>The website aims for the purpose of demonstration of Payment Gateway. It is capable of:</h2>
                <ul>
                    <li>Accepting donation amounts</li>
                    <li>Sending confirmation receipt to the donor through email instantly</li>
                    <li>Notifying the amount of donation to the organisation</li>
                </ul>
                <h2>The payment gateway used in RazorPay.</h2>
            </div>
            <Footer />
        </div>
    )
}

export default About
