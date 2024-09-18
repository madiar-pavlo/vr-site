import React from "react";

const TechCard = ({card, ...props}) => {
    return (
        <li {...props} className='technologies__list-item'>
            <img 
                className={`technologies__logo${card.isUnreal ? ' technologies__unreal-engine' : ''}`}
                src={card.image} 
                alt={card.alt} />
        </li>
    )
}
export default TechCard