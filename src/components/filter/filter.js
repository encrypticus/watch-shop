import React, { useEffect, useRef } from 'react';
import './filter.scss';

const Filter = (props) => {

  return (
    <div className='filter'>
      {props.children}
    </div>
  );
};

const FilterItem = (props) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    btn.addEventListener('click', function () {
      const itemWrapper = this.nextElementSibling;
      const span = this.querySelector('.filter__item-icon');
      span.classList.toggle('filter__item-icon_expanded');

      if (itemWrapper.style.maxHeight) {
        itemWrapper.style.maxHeight = null; // на самом деле эта строка излишня, достаточно строки ниже
        itemWrapper.removeAttribute('style');
      } else {
        itemWrapper.style.maxHeight = `${itemWrapper.scrollHeight}px`;
      }
    });
  }, []);

  return (
    <div className='filter__item'>
      <button
        type='button'
        ref={btnRef}
        className='filter__button'
      >
        {props.title}
        <span className='filter__item-icon'></span>
      </button>
      <div className='filter__item-wrapper'>
        {props.children}
      </div>
    </div>
  );
}

export { FilterItem };
export default Filter;