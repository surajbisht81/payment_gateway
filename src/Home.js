import React from 'react'
import "./Home.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer.js";

function Home() {
    return (
        <div className="home">
            <Navbar />

            <img src="https://www.humanitygives.com/wp-content/uploads/2017/08/orphan-appeal-charities-in-uk.jpg" alt="orphane_image" />
 
            <div className="middle__part">
                <h1> CHARITY NEEDS LIST </h1>
                <p id="special__paragraph">
                For those supporters who enjoy buying items themselves, here are a few suggestions which are always welcome. There are two main events during the year which really need help from our supporters, they are Christmas, when we need lots of small toys which can be added together as stocking fillers. the second is the new school year when we need a LOT of educational supplies.
                </p>

                <h3> HEALTH CARE AND CLEANLINESS </h3>
                <p>
                    Health care is an important area of our work as the children are always at a higher risk of infection and dieseses. Malaria and Severe burns are relatively common due to the children's environmental in the slums. We try and prevent as many issues as possible by supplying mosquito protection and give them basic hygeine supplies like soap, toothpaste and monthly pads for the older girls. If something does happen we are here to advice, support and pay for their medical treatment.
                </p>
                <ul className="ThumbLink">
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Monthly-Pads.jpg" header="Monthly Pads" para="The older girls are always in need of monthly pads to make them feels more comfortable"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Soap.jpg" header="Soap" para="We buy most of the soap we give out but are always happy to receive it as gifts in kind"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Toothpaste-Brushes.jpg" header="Toothpaste & Brushes" para="We are delighted to receive extra toothpaste which we give out months to 100+ kids"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Shampoo-Conditioner.jpg" header="Shampoo & Conditioner" para="The older girls really benefit from conditioner to help with their really long hair"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Prickly-Heat-Powder.jpg" header="Prickly Heat Powder" para="May/June are desperate for Prickly Heat Powder as it can get umbearable at times"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Fruit.jpg" header="Fruit" para="We are happy for visitors to bring and help give it out during their visit (60+ Kids)"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Medical-Supplies.jpg" header="Medical Supplies" para="Non Adhesive Pads, Medical Tape, Bandages, Hand Sanitiser etc are always useful"/></li>
                </ul>

                <h3> PRESENTS AND GIFTS </h3>
                <p>
                Presents might not be as important as the other items in this list, but the joy that the children get by a small present is a joy to watch. We usually give out one or two presents a year. Decembr is the main time when we try and pack, wrap and give out as many presents as possible. Each prsent is usually made up of 6 or 7 smaller items and in the past we have provided over 700 wrapped presents. Although this really depends on the amount of small items that are donated. So please, if you can bring a few small items it will make a huge difference!
                </p>
                <ul className="ThumbLink">
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Tennis-Balls.jpg" header="Tennis Balls" para="ennis Balls are always a great stocking filler for both the boys and the girls"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Badminton-Sets.jpg" header="Badminton Sets" para="The children love badminton, tennis and othre games. Often used as Christmas presents"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Cricket-Bat.jpg" header="Cricket Bats" para="As you can imagine cricket bat and balls are highly sort after, seasoned bats are preffered"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Balloons.jpg" header="Balloons" para="Punch Balloons are the ideal stocking fillers and we are always in need of small items"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Footballs.jpg" header="Footballs" para="Footballs are usually used for presents at Christmas, any type are balls are welcome"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Bracelets-Bangles.jpg" header="Bracelets & Bangles" para="Bubbles are a great stocking filler and children of any age love them"/></li>
                    <li> <Card img="https://www.goaoutreach.org/Wish-List/Bubbles.jpg" header="Bubbles" para="Non Adhesive Pads, Medical Tape, Bandages, Hand Sanitiser etc are always useful"/></li>
                </ul>
            </div>

            <Footer />
        </div>
    )
}

export default Home
