import React from "react";
import EventButton from "../../EventButton/EventButton";

const ServicesCard = ({ card, ...props }) => {
  return (
    <li {...props} className='card'>
      <img
        src={card.image}
        rel='preload'
        alt={card.alt}
        className='card__image'
      />
      <h3 className='card__title'>{card.title}</h3>
      <p>{card.description}</p>
      <EventButton>try it now</EventButton>
    </li>
  );
};
export default ServicesCard;
