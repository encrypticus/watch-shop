import React from 'react';
import './footer.scss';
import Logo from '#comps/logo';

const Footer = (props) => (
    <footer className='page-footer'>
      <ul className='page-footer__inner'>

        <li>
          <ul>
            <li style={{ marginBottom: '23px' }}><Logo to='/' light/></li>
            <li><a className='page-footer__link' href='tel:+8-499-450-47-97'>8 (499) 450-47-97</a></li>
            <li><a className='page-footer__link' href='mailto:info@conquest.watch.ru'>info@conquest.watch.ru</a> </li>
          </ul>
        </li>

        <li>
          <ul>
            <li><h4 className='footer__title'>О компании</h4> </li>
            <li><a className='page-footer__link' href='#' >Наши магазины</a></li>
            <li><a className='page-footer__link' href='#' >Вакансии</a></li>
            <li><a className='page-footer__link' href='#' >Сертификаты</a></li>
            <li><a className='page-footer__link' href='#' >Отзывы</a></li>
          </ul>
        </li>

        <li>
          <ul>
            <li><h4 className='footer__title'>Покупателям</h4> </li>
            <li><a className='page-footer__link' href='#' >Каталог товаров</a></li>
            <li><a className='page-footer__link' href='#' >Как заказать?</a></li>
            <li><a className='page-footer__link' href='#' >FAQ</a></li>
            <li><a className='page-footer__link' href='#' >Корпоративным клиентам</a></li>
          </ul>
        </li>

        <li>
          <ul>
            <li><h4 className='footer__title'>Оплата и доставка</h4> </li>
            <li><a className='page-footer__link' href='#' >Способы оплаты</a></li>
            <li><a className='page-footer__link' href='#' >Время доставки</a></li>
            <li><a className='page-footer__link' href='#' >Гарантии и ремонт</a></li>
            <li><a className='page-footer__link' href='#' >Возврат и компенсация</a></li>
          </ul>
        </li>

      </ul>
    </footer>
);

export default Footer;
