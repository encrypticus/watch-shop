import React from 'react';
import './checkbox.scss';

const Checkbox = (props) => {
  return (
    <div className='checkbox-wrapper'>
      <input className='checkbox' type='checkbox' id={props.id}/>
      <label htmlFor={props.id}>{props.children}</label>
    </div>
  );
};

export default Checkbox;