import React from "react";
import manWithVR from "../../../../images/man-with-vr.png";
import Represent from "../../../UI/Represent/Represent";
import EventButton from "../../../UI/EventButton/EventButton";
import { motion } from "framer-motion";
import { fromDownAnimation, showAnimation } from "/src/animations/animations";

const info = {
  boldText: "introduction",
  thinText: "to hydra VR",
  text: `
        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
    `,
};

const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.5, once: true }}
      id='about'
      className='about'
    >
      <Represent info={info} />
      <div className='about__info'>
        <motion.img
          custom={3}
          variants={showAnimation}
          src={manWithVR}
          className='about__image'
          alt='Man With VR'
        />
        <div className='about__info--info'>
          <div className='title-without-arrow mobile-hidden'>
            <motion.h2
              custom={1}
              variants={fromDownAnimation}
              className='title-without-arrow__title'
            >
              About
              <br />
              <motion.span
                custom={2}
                variants={showAnimation}
                className='title-without-arrow__thin title--thin'
              >
                Hydra VR
              </motion.span>
            </motion.h2>
          </div>
          <motion.p custom={3} variants={showAnimation}>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </motion.p>
          <EventButton classNames='about__button'>
            lets get in touch
          </EventButton>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
