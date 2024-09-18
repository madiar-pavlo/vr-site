import React, { useState } from "react";
import InputWrapper from "../UI/InputLabel/InputWrapper";
import { motion } from "framer-motion";
import { fromDownAnimation } from "/src/animations/animations";

const inputsForPersonalInfo = [
  {
    id: "firstName",
    title: "First Name",
  },
  {
    id: "lastName",
    title: "Last Name",
  },
  {
    id: "email",
    title: "Email",
    type: "email",
  },
  {
    id: "tel",
    title: "Phone Number",
    type: "tel/number",
    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
  },
];
const subjectInput = {
  id: "subject",
  title: "Subject",
};
const messageTextArea = {
  id: "message",
  title: "Tell Us Something...",
};

const JoinForm = ({ buttonState, personalState, emailState }) => {
  const { setIsFormSended } = buttonState;
  const { personalInfo, setPersonalInfo } = personalState;
  const { emailContent, setEmailContent } = emailState;
  const onClick = (e) => {
    e.preventDefault();
    setIsFormSended(true);
  };
  return (
    <motion.form variants={fromDownAnimation} action='' className='form'>
      <fieldset className='form__personal-info'>
        <legend className='visually-hidden'>Personal information</legend>
        {inputsForPersonalInfo.map((item, index) => {
          return (
            <InputWrapper
              className='personal-info'
              state={personalInfo}
              setState={setPersonalInfo}
              item={item}
              key={index}
            />
          );
        })}
      </fieldset>
      <fieldset className='form__mail-content'>
        <legend className='visually-hidden'>Mail Content</legend>
        <InputWrapper
          state={emailContent}
          setState={setEmailContent}
          item={subjectInput}
          key={subjectInput}
        />
        <textarea
          name={messageTextArea.id}
          id={messageTextArea.id}
          placeholder={messageTextArea.title}
          className='form__textarea'
          value={emailContent.message}
          onChange={(e) =>
            setEmailContent({
              ...emailContent,
              [messageTextArea.id]: e.target.value,
            })
          }
        ></textarea>
      </fieldset>
      <button onClick={onClick} className='form__button button'>
        send to hydra
      </button>
    </motion.form>
  );
};

export default JoinForm;
