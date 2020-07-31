import React from 'react';
import './socials.scss';
import fb from './img/facebook_icon.svg';
import inst from './img/instagram_icon.svg';
import tw from './img/twitter_icon.svg';

const Socials = ({ vertical }) => {
  return (
    <div className={`socials ${vertical ? 'socials_vertical' : ''}`}>
      <a className='socials__link' href='#' aria-label='social button'>
        <img className='socials__icon' src={inst} alt='instagram'/>
      </a>

      <a className='socials__link' href='#' aria-label='social button'>
        <img className='socials__icon' src={fb} alt='facebook'/>
      </a>

      <a className='socials__link' href='#' aria-label='social button'>
        <img className='socials__icon' src={tw} alt='twitter'/>
      </a>
    </div>
  );
};

export default Socials;