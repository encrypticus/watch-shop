import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './filter.scss';

const Filter = (props) => (
  <div className='filter'>
    {props.children}
  </div>
);

const FilterItem = (props) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    btn.addEventListener('click', function btnHandler() {
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
};

Filter.propTypes = {
  children: PropTypes.node.isRequired,
};

FilterItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export { FilterItem };
export default Filter;
