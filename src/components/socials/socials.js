import React from 'react';
import PropTypes from 'prop-types';
import './socials.scss';
import fb from './img/facebook_icon.svg';
import inst from './img/instagram_icon.svg';
import tw from './img/twitter_icon.svg';

const Socials = ({ vertical, horizontal }) => {
  let classList = '';
  if (vertical) classList += ' socials_vertical';
  if (horizontal) classList += ' socials_horizontal';

  return (
    <div className={`socials ${classList}`}>
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

Socials.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
};

export default Socials;
