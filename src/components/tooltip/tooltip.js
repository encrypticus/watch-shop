import React from 'react';
import PropTypes from 'prop-types';
import './tooltip.scss';

const Tooltip = (props) => (
  <div className='tooltip'>
    {props.children}
  </div>
);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tooltip;
