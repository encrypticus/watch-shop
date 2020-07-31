import React from 'react';
import './button.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link className={`button ${props.brown ? 'button_color_brown' : ''}`} to={props.to}>
      {props.children}
    </Link>
  );
};

export default Button;