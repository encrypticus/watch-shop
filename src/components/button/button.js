import React from 'react';
import './button.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link className='button' to={props.to}>
      {props.children}
    </Link>
  );
};

export default Button;