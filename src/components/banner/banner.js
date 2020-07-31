import React from 'react';
import './banner.scss';
import banner from './img/watch_main.png';
import Tooltip from '#comps/tooltip';
import DecorLine from '#comps/decor-line';

const Banner = (props) => {
  return (
    <div className='banner'>
      <div className='banner__tooltip-wrapper'>
        <Tooltip>
          22 000 ₽
        </Tooltip>
        <div className='banner__decor-line-wrapper'>
          <DecorLine/>
        </div>
      </div>

      <img className='banner__img' src={banner} alt='banner'/>

      <div className='banner__tooltip-wrapper banner__tooltip-wrapper_bottom'>
        <div className='banner__decor-line-wrapper banner__decor-line-wrapper_right'>
          <DecorLine/>
        </div>
        <Tooltip>
          28 мм диаметр
        </Tooltip>
      </div>
    </div>
  );
};

export default Banner;