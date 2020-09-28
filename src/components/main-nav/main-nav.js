import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isMenuOpen } from '#act/main-nav';
import {
  Nav,
  Wrapper,
  NavList,
  NavItem,
  StyledLink,
} from './styles';
import Hamburger from '#comps/hamburger';

const MainNav = () => {
  const isOpen = useSelector((state) => state.mainNavReducer.isOpen);
  const { isUserSignedIn } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(isMenuOpen(false));
  };

  const carts = (
    <>
      <NavItem>
        <StyledLink to='/product-cart' onClick={handleClick}>Корзина</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to='/favorites-cart' onClick={handleClick}>Избранное</StyledLink>
      </NavItem>
    </>
  );

  return (
    <Nav opened={isOpen}>
      <NavList>
        <NavItem>
          <StyledLink to='/' onClick={handleClick}>Главная</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/catalog' onClick={handleClick}>Каталог</StyledLink>
        </NavItem>
        {isUserSignedIn && carts}
      </NavList>
      <Wrapper>
        <Hamburger color='white'/>
      </Wrapper>
    </Nav>
  );
};

export default MainNav;
