import React from 'react';
import Card from '#comps/card';
import Discount from '#comps/discount';
import './cards.scss';

const Cards = () => {
  return (
    <div className='cards'>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_1.png'/>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_2.png'/>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_3.png'/>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_4.png'/>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_5.png'/>
      <Discount/>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_6.png'/>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_7.png'/>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_8.png'/>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_9.png'/>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_10.png'/>
      <Card vendor='Techne' price='12 700 ₽' src='./img/watch_11.png'/>
    </div>
  )
}

export default Cards;
