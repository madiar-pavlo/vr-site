import { useContext, useRef } from "react";
import arrow from "../../../images/icons/arrow.png";
import { SliderContext } from "../../../context/SliderContext";

const SlideNextButton = ({ swiper, itemType }) => {
  const { setSlideNextButton, slidePrevButton, slideNextButton } =
    useContext(SliderContext);

  const onButtonClick = (e) => {
    if (swiper.current.isEnd) {
      e.target.classList.add("button--opacity");
      slideNextButton.classList.add("disabled-cursor");
    }
    if (!swiper.current.isBeginning) {
      slidePrevButton.children[0].classList.remove("button--opacity");
      slidePrevButton.classList.remove("button--opacity");
      slidePrevButton.classList.remove("disabled-cursor");
    }
  };
  return (
    <button
      onClick={onButtonClick}
      className={`button__slide button__slide--right ${itemType}__slider--next-button`}
      ref={(ref) => setSlideNextButton(ref)}
    >
      <img src={arrow} alt='Swipe to next slide' />
    </button>
  );
};

export default SlideNextButton;
