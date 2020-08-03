import React from 'react';
import './card.scss';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <h4 className='card__vendor'>{props.vendor}</h4>
        <div className='card_buttons'>
          <button>like</button>
          <button>cart</button>
        </div>
        <p className='card__price'>{props.price}</p>
      </div>
      <div className='card__body'>
        <img className='card__image' src={props.src}/>
      </div>
    </div>
  );
};

export default Card;