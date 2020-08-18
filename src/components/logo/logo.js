import React from 'react';
import PropTypes from 'prop-types';
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

Logo.propTypes = {
  light: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default Logo;
