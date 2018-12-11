import React from "react";
import "./Card.css";


const Card = () => {
    <div className="card">
        <div className="img-container">
            <img
                alt = "Spongebob"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png"
            />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name: </strong> Spongebob
                </li>
            </ul>
        </div>
    </div>
}

export default Card;