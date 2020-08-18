import React from 'react';
import './heading.scss';

const Heading = (props) => {
  const h1 = <h1 className={`heading ${props.centered ? 'heading_centered' : ''}`}>
    {props.children}
  </h1>;

  const h2 = <h2 className={`heading ${props.centered ? 'heading_centered' : ''}`}>
    {props.children}
  </h2>;

  const h3 = <h3 className={`heading ${props.centered ? 'heading_centered' : ''}`}>
    {props.children}
  </h3>;

  switch (props.level) {
    case 'h1':
      return h1;
    case 'h2':
      return h2;
    case 'h3':
      return h3;
    default:
      return h1;
  }
};

export default Heading;
