import React from 'react';
import './decor-line.scss';

const DecorLine = (props) => {
  return (
    <div className={`decor-line ${props.small ? 'decor-line_small' : ''}`}></div>
  );
};

export default DecorLine;