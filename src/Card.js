import React from 'react'
import "./Card.css";

function Card({img, header, para}) {
    return (
        <div className="card">
            <img src={img} />
            <div className="card__text">
                <h1> {header} </h1>
                <p> {para} </p>
            </div>
        </div>
    )
}

export default Card
