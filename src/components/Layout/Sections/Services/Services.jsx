import React, { useContext } from "react";

import simulationCardImage from "../../../../images/simulation-card.png";
import educationCardImage from "../../../../images/education-card.png";
import selfCareCardImage from "../../../../images/self-care-card.png";
import outdoorCardImage from "../../../../images/outdoor-card.png";

import Represent from "../../../UI/Represent/Represent";

import { Context } from "../../../../context/Context";
import { motion } from "framer-motion";
import Slider from "../../../Slider/Slider";

const servicesCards = [
  {
    image: simulationCardImage,
    alt: "The Girl with VR",
    title: "simulation",
    description: `
            Vitae sapien pellentesque habitant morbi
            nunc. Viverra aliquet  porttitor rhoncus 
            libero justo laoreet sit amet vitae.
        `,
  },
  {
    image: educationCardImage,
    alt: "The Boy with VR",
    title: "education",
    description: `
            Vitae sapien pellentesque habitant morbi
            nunc. Viverra aliquet  porttitor rhoncus 
            libero justo laoreet sit amet vitae.
        `,
  },
  {
    image: selfCareCardImage,
    alt: "The Girl with VR meditating",
    title: "self-care",
    description: `
            Vitae sapien pellentesque habitant morbi
            nunc. Viverra aliquet  porttitor rhoncus 
            libero justo laoreet sit amet vitae.
        `,
  },
  {
    image: outdoorCardImage,
    alt: "The Man outdoor with VR",
    title: "outdoor",
    description: `
            Vitae sapien pellentesque habitant morbi
            nunc. Viverra aliquet  porttitor rhoncus 
            libero justo laoreet sit amet vitae.
        `,
  },
];
const info = {
  boldText: "why build",
  thinText: "with hydra?",
  text: `
        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
    `,
};
const Services = () => {
  const { isDesktop, isTablet, isMobile } = useContext(Context);

  const getSlidesPerView = () => {
    if (isMobile) {
      return 1;
    }
    if (isTablet) {
      return 2;
    }
    if (isDesktop) {
      return 3;
    }
  };
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.4, once: true }}
      id='services'
      className='services'
    >
      <Represent info={info} />
      <div className='services__slider-wrapper'>
        <Slider
          listOfCard={servicesCards}
          itemType='services'
          slidesPerView={getSlidesPerView()}
          mediaRequest={"isDesktop"}
          spaceBetween={10}
        />
      </div>
    </motion.section>
  );
};

export default Services;
