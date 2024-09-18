import { useContext, useRef, useState } from "react";
import { typingEffect } from "/src/helpers/typingEffect";
import Transiton from "/src/Transition";
import { Context } from "/src/context/Context";

const AUTOR_TEXT = "AUTOR";

const GOLDEN_TEXT = "HTML & CSS, JS";

const REACT_TEXT = "React";

const PreLoader = () => {
  const { setIsntFirstVisit } = useContext(Context);

  const [textAutor, setTextAutor] = useState("");
  const [description, setDescription] = useState("");
  const [reactText, setReactText] = useState("");

  const hopeTextRef = useRef();
  const preloaderRef = useRef();

  const onTitleAnimationEnd = () => {
    typingEffect(AUTOR_TEXT, setTextAutor, 150);
    typingEffect(GOLDEN_TEXT, setDescription, 140);
    typingEffect(REACT_TEXT, setReactText, 210);
  };

  const onReactTextAnimationEnd = () => {
    hopeTextRef.current.style.animation =
      "preloader-hope-text-animation 1s forwards";
  };

  const onLastElAnimationEnd = () => {
    localStorage.setItem("isntFirstVisit", true);
    setIsntFirstVisit(true);
  };
  return (
    <aside className='preloader' ref={preloaderRef}>
      <div className='preloader--wrapper'>
        <h2 className='preloader__title' onAnimationEnd={onTitleAnimationEnd}>
          Ahoj, jsem&nbsp;
          <span className='preloader__gradient-text gradient-text typed-text'>
            {textAutor}
          </span>
          <br />
          tohoto webu
        </h2>
        <div
          // onAnimationEnd={onDescriptionAnimationEnd}
          className='preloader__description'
        >
          <p>Tento web je stvoren s pomoci</p>
          <span className='gradient-text gradient-text--golden'>
            {description}
          </span>
          <br />
          <span
            onAnimationEnd={onReactTextAnimationEnd}
            className='preloader__description-react gradient-text'
          >
            {reactText}
          </span>

          <p
            onAnimationEnd={onLastElAnimationEnd}
            className='preloader__description--hope-text'
            ref={hopeTextRef}
          >
            Doufam ze si to uzijete:))
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Transiton(PreLoader);
