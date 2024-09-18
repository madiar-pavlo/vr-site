import React from "react";


const ServicesCard = ({card, ...props}) => {
    return (  
        <li {...props} className="card">
            <img src={card.image} rel="preload" alt={card.alt} className="card__image"/>
            <h3 className="card__title">
                {card.title}
            </h3>
            <p>
                {card.description}  
            </p>
            <button className="button">
                try it now
            </button>
        </li>
    )
}
export default ServicesCard