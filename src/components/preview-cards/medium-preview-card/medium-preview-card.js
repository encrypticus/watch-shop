import React from 'react';
import './medium-preview-card.scss';
import cardMedium from '../img/medium.png';
import { Link } from 'react-router-dom';
import DecorLine from '#comps/decor-line';

const MediumPreviewCard = (props) => {
  return (
    <div className='medium-preview-card'>
      <div className='medium-preview-card__info'>
        <h4 className='medium-preview-card__title'>Rado</h4>
        <p className='medium-preview-card__price'>65 300 ₽</p>
      </div>

      <div className='medium-preview-card__img-wrapper'>
        <img className='medium-preview-card__img' src={cardMedium} alt='Rado'/>
      </div>

      <div className='medium-preview-card__link-wrapper'>
        <div className='medium-preview-card__decor-line-wrapper'>
          <DecorLine small/>
        </div>
        <Link to='/' className='medium-preview-card__link'>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default MediumPreviewCard;