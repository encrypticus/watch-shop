import React from 'react';
import './subscribe.scss';

const Subscribe = () => (
    <div className='subscribe-wrapper'>
      <section className='subscribe row direction-tablet-landscape-column'>
        <div className='subscribe__text col'>
          <p className='subscribe__subscription'>
            Подписка на рассылку
          </p>
          <p className='subscribe__content'>
            Получить скидку 10% на первую покупку
          </p>
        </div>

        <form className='subscribe__form row col align-items-end justify-content-between'>
          <input className='col subscribe__email' type='email' name='email' placeholder='E-mail'/>
          <button className='col subscribe__submit' type='submit' name='send-email'>Подписаться</button>
        </form>
      </section>
    </div>
);

export default Subscribe;
