import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { Link } from 'react-router-dom';

const Button = (props) => (
  <Link className={`button ${props.brown ? 'button_color_brown' : ''}`} to={props.to}>
    {props.children}
  </Link>
);

Button.propTypes = {
  brown: PropTypes.bool,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
