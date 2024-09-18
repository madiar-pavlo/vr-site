import React, { useState } from "react";

import { motion } from "framer-motion";
import { fromDownAnimation } from "../../../../animations/animations";

import JoinForm from "../../../JoinForm/JoinForm";
import Dialog from "../../../UI/Dialog/Dialog";
import ViewEmail from "../../../ViewEmail/ViewEmail";

const joinRepresent = {
  title: "Join Hydra",
  thinTitle: "Let’s Build Your VR Experience",
};

const Join = () => {
  const [isFormSended, setIsFormSended] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    tel: null,
    email: "",
  });
  const [emailContent, setEmailContent] = useState({
    subject: "",
    message: "",
  });
  return (
    <>
      <Dialog buttonState={{ isFormSended, setIsFormSended }}>
          <ViewEmail personalInfo={personalInfo}/>
      </Dialog>

      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true }}
        className='join'
        id='join'
      >
        <motion.h2
          custom={1}
          variants={fromDownAnimation}
          className='join__title'
        >
          {joinRepresent.title}
        </motion.h2>
        <motion.h3
          custom={2}
          variants={fromDownAnimation}
          className='join__title--thin title--thin'
        >
          {joinRepresent.thinTitle}
        </motion.h3>
        <JoinForm
          buttonState={{ isFormSended, setIsFormSended }}
          personalState={{ personalInfo, setPersonalInfo }}
          emailState={{ emailContent, setEmailContent }}
        />
      </motion.section>
    </>
  );
};
export default Join;
