import React from 'react';
import './sorting.scss';

const Sorting = () => (
    <form className='sorting'>
      <span className='sorting__text'>Cортировать по: </span>
      <select className='sorting__select'>
        <option name='popularity'>
          популярности
        </option>
        <option name='decrease'>
          цене по убыванию
        </option>
        <option name='increase'>
          цене по возрастанию
        </option>
      </select>
    </form>
);

export default Sorting;
