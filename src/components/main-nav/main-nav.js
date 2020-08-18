import React from 'react';
import { useSelector } from 'react-redux';
import { Nav, Wrapper } from './styles';
import Hamburger from '#comps/hamburger';

const MainNav = () => {
  const isOpen = useSelector((state) => state.mainNavReducer.isOpen);

  return (
    <Nav opened={isOpen}>
      <Wrapper>
        <Hamburger color='white'/>
      </Wrapper>
    </Nav>
  );
};

export default MainNav;
