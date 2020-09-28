import React from 'react';
import './large-preview-card.scss';
import { Link } from 'react-router-dom';
import cardLarge from '../img/large.png';
import DecorLine from '#comps/decor-line';

const LargePreviewCard = () => (
    <div className='large-preview-card'>
      <div className='large-preview-card__left-block'>
        <div className='large-preview-card__info'>
          <h4 className='large-preview-card__title'>Rado</h4>
          <p className='large-preview-card__price'>65 300 ₽</p>
        </div>
        <div className='large-preview-card__link-wrapper'>
          <div className='large-preview-card__decor-line-wrapper'>
            <DecorLine />
          </div>
          <Link to='/catalog' className='large-preview-card__link'>
            Подробнее
          </Link>
        </div>
      </div>

      <div className='large-preview-card__img-wrapper'>
        <img className='large-preview-card__img' src={cardLarge} alt='Rado'/>
      </div>

    </div>
);

export default LargePreviewCard;
