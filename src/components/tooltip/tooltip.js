import React from 'react';
import './tooltip.scss';

const Tooltip = (props) => (
    <div className='tooltip'>
      {props.children}
    </div>
);

export default Tooltip;
