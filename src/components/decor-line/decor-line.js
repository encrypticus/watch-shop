import React from 'react';
import PropTypes from 'prop-types';
import './decor-line.scss';

const DecorLine = (props) => (
    <div className={`decor-line ${props.small ? 'decor-line_small' : ''}`}></div>
);

DecorLine.propTypes = {
  small: PropTypes.bool,
};

export default DecorLine;
