import React, { useState, useEffect } from 'react';
import './product-counter.scss';

const ProductCounter = ({ price, recalculatePrice }) => {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(1);

  useEffect(() => {
    const newPrice = parseInt(price.replaceAll(/\s/g, '')) * value2;
    recalculatePrice(newPrice);
  }, [value2]);

  const isValidLowerValue = (value) => value > 1;

  const isValidTopValue = (value) => value < 10;

  const isValidInputValue = (value) => {
    if (!value) return false;

    if (Number.isNaN(parseInt(value))) return false;

    const newValue = parseInt(value, 10);

    if (typeof newValue !== 'number') return false;

    if (newValue <= 0) return false;

    if (newValue >= 10) return 10;

    return newValue;
  };

  const incrementValue = () => {
    if (!isValidTopValue(value)) return;

    setValue(value + 1);
    setValue2(value2 + 1);
  };

  const decrementValue = () => {
    if (!isValidLowerValue(value)) return;

    setValue(value - 1);
    setValue2(value2 - 1);
  };

  const onChangeHandler = ({ target: { value } }) => {
    setValue(value);
  };

  const onBlurHandler = ({ target: { value } }) => {
    if (isValidInputValue(value)) {
      setValue(isValidInputValue(value));
      setValue2(isValidInputValue(value));
    } else {
      setValue(1);
      setValue2(1);
    }
  };

  return (
    <div className='product-counter'>
      <button
        className='product-counter__button product-counter__button_minus'
        type='button'
        onClick={decrementValue}
      ></button>
      <input
        className='product-counter__input'
        type='text'
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      <button
        className='product-counter__button product-counter__button_plus'
        type='button'
        onClick={incrementValue}
      ></button>
    </div>
  );
};

export default ProductCounter;
