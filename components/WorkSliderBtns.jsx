"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ swiper, containerStyles, btnStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper && swiper.slidePrev()}
        disabled={!swiper}
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper && swiper.slideNext()}
        disabled={!swiper}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
