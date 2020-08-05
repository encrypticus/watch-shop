import React, { useEffect, useRef } from 'react';
import './slider.scss';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.min.css';
import wNumb from 'wnumb';

const Slider = (props) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    noUiSlider.create(slider, {
      start: [20000, 60000],
      connect: true,
      tooltips: [true, true],
      range: {
        'min': 10000,
        'max': 100000
      },
      format: wNumb({
        decimals: 3,
        thousand: '.',
        suffix: ' ₽'
      })
    });

    slider.noUiSlider.on('change', function (values) {
      console.log(values);
    });
  }, []);

  return (
    <div className='slider-wrapper'>
      <div className='slider' ref={sliderRef}></div>
    </div>
  );
};

export default Slider;