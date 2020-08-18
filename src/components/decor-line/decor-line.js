import React from 'react';
import './decor-line.scss';

const DecorLine = (props) => (
    <div className={`decor-line ${props.small ? 'decor-line_small' : ''}`}></div>
);

export default DecorLine;
