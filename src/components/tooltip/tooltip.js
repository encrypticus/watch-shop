import React from 'react';
import './tooltip.scss';

const Tooltip = (props) => {
  return (
    <div className='tooltip'>
      {props.children}
    </div>
  );
};

export default Tooltip;