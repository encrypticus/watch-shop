import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortBy } from '#act/catalog-cards';
import './sorting.scss';

const Sorting = () => {
  const [value, setValue] = useState('popularity');
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    dispatch(sortBy(value));
  };

  return (
    <form className='sorting'>
      <span className='sorting__text'>Cортировать по: </span>
      <select
        className='sorting__select'
        value={value}
        onChange={handleChange}
      >
        <option value='popularity'>
          популярности
        </option>
        <option value='desc'>
          цене по убыванию
        </option>
        <option value='asc'>
          цене по возрастанию
        </option>
      </select>
    </form>
  );
};

export default Sorting;
