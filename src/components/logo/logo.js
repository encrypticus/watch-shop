import React from 'react';
import { StyledLink } from './styles';

const Logo = (props) => {

  return (
    <StyledLink to={props.href || '/'}>
      Conquest
    </StyledLink>
  );
};

export default Logo;
