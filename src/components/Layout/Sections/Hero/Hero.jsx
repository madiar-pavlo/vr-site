import { motion } from "framer-motion";

import MSlider from "../../../Slider/Slider";
import EventButton from "../../../UI/EventButton/EventButton";

import girl from "../../../../images/girl-pink-bg.png";
import vectorForVr from "../../../../images/vectors/vector-for-vr.svg";
import vectorForGirl from "../../../../images/vectors/vector-for-girl-1.svg";
import vectorForGirl2 from "../../../../images/vectors/vector-for-girl-2.svg";
import vectorForGirl3 from "../../../../images/vectors/vector-for-girl-3.svg";
import locationIcon from "../../../../images/icons/location-icon.svg";
import phoneIcon from "../../../../images/icons/phone-icon.svg";
import emailIcon from "../../../../images/icons/email-icon.svg";
import { afterElAnimation, showAnimation } from "/src/animations/animations";

const contactsLinks = [
  {
    title: "Pay Us a Visit",
    href: "https://maps.app.goo.gl/g2GbJmE2AJ1NytSZ7",
    content: "Union St, Seattle, WA 98101, United States",
    icon: locationIcon,
    type: "address",
  },
  {
    title: "Give Us a Call",
    href: "tel:11011111010",
    content: "(110) 1111-1010",
    icon: phoneIcon,
    type: "tel",
  },
  {
    title: "Send Us a Message",
    href: "mailto:Contact@HydraVTech.com",
    content: "Contact@HydraVTech.com",
    icon: emailIcon,
    type: "email",
  },
];
const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='hero'
      id='hero'
    >
      <motion.div className='hero__wrapper'>
        <motion.div variants={showAnimation} className='hero__info'>
          <motion.img
            custom={2.4}
            variants={showAnimation}
            src={vectorForVr}
            alt=''
            rel='preload'
            className='vector mobile-hidden'
          />
          <motion.h1
            custom={1.4}
            variants={showAnimation}
            className='hero__info-title'
          >
            <span className='gradient-text'>Dive&nbsp;</span>
            Into The Depths Of&nbsp;
            <span className='gradient-text'>Virtual Reality</span>
          </motion.h1>
          <motion.p
            custom={3.8}
            variants={showAnimation}
            className='hero__info-description mobile-hidden'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </motion.p>
          <EventButton classNames='hero__button'>Build Your World</EventButton>
        </motion.div>
        <motion.div
          custom={3}
          variants={afterElAnimation}
          className='hero__design'
        >
          <img
            src={vectorForGirl}
            rel='preload'
            alt=''
            className='vector vector1'
          />
          <img
            src={vectorForGirl3}
            rel='preload'
            alt=''
            className='vector vector2'
          />
          <img
            src={vectorForGirl2}
            rel='preload'
            alt=''
            className='vector vector3'
          />
          <img
            src={girl}
            rel='preload'
            alt=''
            width='490'
            height='426'
            className='hero__design-image'
          />
        </motion.div>
      </motion.div>
      <motion.footer variants={showAnimation} className='hero-footer'>
        <MSlider listOfCard={contactsLinks} itemType='hero-footer' />
      </motion.footer>
    </motion.section>
  );
};

export default Hero;
