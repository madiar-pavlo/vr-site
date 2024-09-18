import React from "react";

import unrealEngine from "../../../../images/company-logos/unreal-engine.png";
import unity from "../../../../images/company-logos/unity.png";
import oculus from "../../../../images/company-logos/oculus.png";
import vive from "../../../../images/company-logos/vive.png";
import MSlider from "../../../Slider/Slider";
import { motion } from "framer-motion";
import { showAnimation } from "/src/animations/animations";

const images = [
  {
    image: unrealEngine,
    alt: "unrealEngine logo",
    isUnreal: true,
  },
  {
    image: unity,
    alt: "unity logo",
  },
  {
    image: oculus,
    alt: "oculus logo",
  },
  {
    image: vive,
    alt: "vive logo",
  },
];

const Technologies = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.5, once: true }}
      className='technologies'
      id="technologies"
    >
      <motion.h2
        custom={2}
        variants={showAnimation}
        className='technologies__title title-without-arrow__title text-center'
      >
        TECHNOLOGIES & HARDWARE
        <br />
        <span className='technologies__title--thin title-without-arrow__thin'>
          USED BY HYDRA VR.
        </span>
      </motion.h2>
      <div className='technologies__slider-wrapper'>
        <MSlider
          listOfCard={images}
          mediaRequest={"isTablet"}
          itemType='technologies'
        />
      </div>
    </motion.section>
  );
};
export default Technologies;
