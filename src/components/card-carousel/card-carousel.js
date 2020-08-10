import React, { useEffect, useRef } from 'react';
import './card-carousel.scss';
import $ from 'jquery';
import 'slick-carousel/slick/slick';

const CardCarousel = (props) => {
  const forRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const forElt = forRef.current;
    const navElt = navRef.current;

    const btnLeft = `
      <button type="button" class="card-carousel__arrow card-carousel__arrow_left">
        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 24L1 12.5L13 1" stroke="#1B1A17" stroke-width="0.5"/>
        </svg>
      </button>`;

    const btnRight = `
      <button type="button" class="card-carousel__arrow card-carousel__arrow_right">
        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 24L13 12.5L1 1" stroke="#1B1A17" stroke-width="0.5"/>
        </svg>
      </button>`;

    $(forElt).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: '.card-carousel__nav',
      prevArrow: btnLeft,
      nextArrow: btnRight
    });
    $(navElt).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.card-carousel__for',
      focusOnSelect: true,
      adaptiveHeight: true
    });

  }, []);

  return (
    <div className='card-carousel'>
      <div className='card-carousel__for' ref={forRef}>
        {props.renderFullImg()}
      </div>
      <div className='card-carousel__nav' ref={navRef}>
        {props.renderPreview()}
      </div>
    </div>
  );
};

const CardCarouselPreview = (props) => {
  return (
    <div className='card-carousel__preview'>
      <img className='card-carousel__img' src={props.src} alt={props.alt || 'preview'}/>
    </div>
  );
};

export { CardCarouselPreview };
export default CardCarousel;