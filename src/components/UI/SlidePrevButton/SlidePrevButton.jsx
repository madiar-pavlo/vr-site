import { useContext } from "react";
import arrow from "../../../images/icons/arrow.png";
import { SliderContext } from "../../../context/SliderContext";

const SlidePrevButton = ({ swiper, itemType }) => {
  const { slideNextButton, setSlidePrevButton, slidePrevButton } =
    useContext(SliderContext);

  const onButtonClick = (e) => {
    if (swiper.current.isBeginning) {
      e.target.classList.add("button--opacity");
      slidePrevButton.classList.add("disabled-cursor");
    }
    if (!swiper.current.isEnd) {
      slideNextButton.children[0].classList.remove("button--opacity");
      slideNextButton.classList.remove("button--opacity");
      slideNextButton.classList.remove("disabled-cursor");
    }
  };

  return (
    <button
      onClick={onButtonClick}
      className={`button__slide button__slide--left disabled-cursor ${itemType}__slider--prev-button`}
      ref={(ref) => setSlidePrevButton(ref)}
    >
      <img src={arrow} alt='Swipe to prev slide' className='button--opacity' />
    </button>
  );
};

export default SlidePrevButton;
