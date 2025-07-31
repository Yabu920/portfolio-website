"use client";

import {useSwiper} from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSlideBtns = ({containerStyles, btnStyles, iconStyles}) =>{
    const swiper = useSwiper();

    const handlePrev = () => {
        if (swiper.activeIndex === 0) {
            swiper.slideTo(swiper.slides.length - 1);
        } else {
            swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiper.activeIndex === swiper.slides.length - 1) {
            swiper.slideTo(0);
        } else {
            swiper.slideNext();
        }
    };
    return(
        <div className={containerStyles}>
            <button className={btnStyles} onClick={handlePrev}>
                <PiCaretLeftBold className={iconStyles}/>
            </button>
            <button className={btnStyles} onClick={handleNext}>
                <PiCaretRightBold className={iconStyles}/>
            </button>

        </div>
    );
};

export default WorkSlideBtns;