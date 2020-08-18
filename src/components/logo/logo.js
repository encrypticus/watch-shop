import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

const Logo = (props) => {
  let classList = 'logo';
  if (props.light) classList += ' logo_light';

  return (
    <Link to={props.to} className={classList}>
      Conquest
    </Link>
  );
};

export default Logo;
