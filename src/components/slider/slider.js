import React, { useEffect, useRef } from 'react';
import './slider.scss';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.min.css';
import wNumb from 'wnumb';
import { useDispatch } from 'react-redux';
import { sortByPrice } from '#act/catalog-cards';
import { type } from 'mmenu-js/dist/_modules/helpers';

const Slider = (props) => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const slider = sliderRef.current;

    noUiSlider.create(slider, {
      start: [10000, 100000],
      connect: true,
      tooltips: [true, true],
      range: {
        'min': 10000,
        'max': 100000
      },
      format: wNumb({
        thousand: ' ',
        suffix: ' ₽',
        decimals: 0
      })
    });

    slider.noUiSlider.on('change', function (values) {
      const min = parseInt(values[0].replace(/[\D]+/g, ''));
      const max = parseInt(values[1].replace(/[\D]+/g, ''));

      dispatch(sortByPrice({ min, max }));
    });
  }, []);

  return (
    <div className='slider-wrapper'>
      <div className='slider' ref={sliderRef}></div>
    </div>
  );
};

export default Slider;