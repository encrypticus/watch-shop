import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './band-carousel.scss';
import $ from 'jquery';
import 'slick-carousel/slick/slick';

const BandCarousel = (props) => {
  const ref = useRef(null);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);

  useEffect(() => {
    const elt = ref.current;
    const btnLeft = btnLeftRef.current;
    const btnRight = btnRightRef.current;

    $(elt).slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: btnLeft,
      nextArrow: btnRight,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, []);

  return (
    <div className='band-carousel-wrapper'>
      <div className='band-carousel' ref={ref}>
        {props.children}
      </div>

      <button
        className='band-carousel__btn-left'
        ref={btnLeftRef}
      >
        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1L1 12.5L13 24" stroke="#1B1A17" strokeWidth="0.5"/>
        </svg>
      </button>

      <button
        className='band-carousel__btn-right'
        ref={btnRightRef}
      >
        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 24L13 12.5L1 1" stroke="#1B1A17" strokeWidth="0.5"/>
        </svg>

      </button>
    </div>
  );
};

BandCarousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BandCarousel;
