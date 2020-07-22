import React from 'react';
import { Link } from './styles';

const Logo = (props) => {

  return (
    <Link className='col' href={props.href || '/'}>
      Conquest
    </Link>
  );
};

export default Logo;
