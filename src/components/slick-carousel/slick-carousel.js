import React, { useEffect, useRef, useState } from 'react';
import './slick-carousel.scss';
import $ from 'jquery';
import 'slick-carousel/slick/slick';

const SlickCarousel = (props) => {
  const ref = useRef(null);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const elt = ref.current;
    const btnLeft = btnLeftRef.current;
    const btnRight = btnRightRef.current;

    $(elt).slick({
      prevArrow: btnLeft,
      nextArrow: btnRight,
      infinite: false,
    });
  }, []);

  const incrementCount = () => {
    if (count >= 4) {
      setCount(4);
      return;
    }
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count <= 1) {
      setCount(1);
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className='slick-carousel-wrapper'>
      <div className='slick-carousel' ref={ref}>
        {props.children}
      </div>

      <span className='slick-carousel__count'>{`0${count}`}</span>

      <button
        className='slick-carousel__btn-left'
        ref={btnLeftRef}
        onClick={decrementCount}
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1L1 6L6 11" stroke="#1B1A17" strokeWidth="0.5"/>
        </svg>
      </button>

      <button
        className='slick-carousel__btn-right'
        ref={btnRightRef}
        onClick={incrementCount}
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 11L6 6L1 1" stroke="#1B1A17" strokeWidth="0.5"/>
        </svg>
      </button>
    </div>

  );
};

export default SlickCarousel;
