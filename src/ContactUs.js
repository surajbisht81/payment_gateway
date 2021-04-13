import React from 'react'
import Footer from './Footer';
import "./Home.css";
import Navbar from './Navbar';

function ContactUs() {
    return (
        <div className="contactus">
            <Navbar />
            <div className="contact__details">
              <ul>
                  <li>
                    <i id="font_awsome" class="fa fa-phone" aria-hidden="true"></i>
                    +91 9999999999
                  </li>
                  <li>
                    <i id="font_awsome" class="fas fa-envelope"></i>
                    needy@gmail.com
                  </li>
              </ul>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs
