import React from 'react';
import PropTypes from 'prop-types';
import './small-preview-card.scss';
import { Link } from 'react-router-dom';
import DecorLine from '#comps/decor-line';
import smallCard from '../img/small1.png';
import smallCard2 from '../img/small2.png';

const SmallPreviewCard = (props) => (
    <div className='small-preview-card'>

      <div className='small-preview-card__left-block'>

        <div className='small-preview-card__info'>
          <h4 className='small-preview-card__title'>{props.title}</h4>
          <p className='small-preview-card__price'>{props.price}</p>
        </div>

        <div className='small-preview-card__link-wrapper'>
          <div className='small-preview-card__decor-line-wrapper'>
            <DecorLine small/>
          </div>
          <Link to='/' className='small-preview-card__link'>
            Подробнее
          </Link>
        </div>

      </div>

      <img className='small-preview-card__img' src={props.src} alt={props.alt}/>

    </div>
);

SmallPreviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export { smallCard, smallCard2 };

export default SmallPreviewCard;
