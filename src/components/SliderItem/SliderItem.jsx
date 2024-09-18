import React from "react";
import ServicesCard from "../UI/Cards/ServicesCard/ServicesCard";
import TechCard from "../UI/Cards/TechCard/TechCard";
import ProcessCard from "../UI/Cards/ProcessCard/ProcessCard";
import HeroCards from "../UI/Cards/HeroCards/HeroCards";

const SliderItem = ({card, itemType, index}) => {
    const items = {
        services: ServicesCard,
        technologies: TechCard,
        process: ProcessCard,
        'hero-footer': HeroCards
    }
    const Card = items[itemType]
    return <Card card={card} index={index}/>
}
export default SliderItem