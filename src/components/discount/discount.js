import React from 'react';
import './discount.scss';
import discount from './img/discount.png';

const Discount = (props) => (
    <div className='discount'>
      <img className='discount__image' src={discount} alt='discount'/>
    </div>
);

export default Discount;
