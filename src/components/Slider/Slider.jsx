import React, { forwardRef, useContext, useRef, useState } from "react";
import SliderItem from "../SliderItem/SliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

import { Context } from "../../context/Context";
import SlideNextButton from "../UI/SlideNextButton/SlideNextButton";
import SlidePrevButton from "../UI/SlidePrevButton/SlidePrevButton";
import { SliderContext } from "../../context/SliderContext";
import { fromUpAnimation } from "/src/animations/animations";
import { fromDownAnimation, showAnimation } from "../../animations/animations";

const Slider = (props) => {
  const {
    listOfCard,
    itemType,
    slidesPerView = 1,
    mediaRequest = "isMobile",
    spaceBetween = 50,
  } = props;

  const swiperRef = useRef();
  const [slideNextButton, setSlideNextButton] = useState();
  const [slidePrevButton, setSlidePrevButton] = useState();

  const mediaResponses = useContext(Context);
  return mediaResponses[mediaRequest] ? (
    <SliderContext.Provider
      value={{
        slideNextButton,
        setSlideNextButton,
        slidePrevButton,
        setSlidePrevButton,
      }}
    >
      <motion.div
        custom={3}
        variants={showAnimation}
        className={`slider__wrapper ${itemType}__slider--wrapper`}
      >
        <SlidePrevButton swiper={swiperRef} itemType={itemType} />
        <div className={`${itemType}__slider slider`}>
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation={{
              nextEl: `.${itemType}__slider--next-button`,
              prevEl: `.${itemType}__slider--prev-button`,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <ul className={`list-of-cards`}>
              {listOfCard.map((card, index) => (
                <SwiperSlide key={index}>
                  <SliderItem card={card} itemType={itemType} index={index} />
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>
        <SlideNextButton swiper={swiperRef} itemType={itemType} />
      </motion.div>
    </SliderContext.Provider>
  ) : (
    <motion.ul
      custom={3}
      variants={showAnimation}
      className={`${itemType}__list padding-left--0`}
    >
      {listOfCard.map((item, index) => (
        <SliderItem
          custom={index}
          variants={fromUpAnimation}
          key={Math.random()}
          card={item}
          itemType={itemType}
          index={index}
        />
      ))}
    </motion.ul>
  );
}

export default Slider;
