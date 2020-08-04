import React, { useEffect, useRef } from 'react';
import './slider.scss';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.min.css';

const Slider = (props) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
        'min': 0,
        'max': 100
      }
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