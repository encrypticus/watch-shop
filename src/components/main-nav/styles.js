import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  min-width: 30vw;
  min-height: 100vh;
  height: 100%;
  padding: 10px;
  padding-left: 30px;
  background-color: rgba(0, 0, 0, .9);
  transform: ${(props) => (props.opened ? 'translateX(0)' : 'translateX(-30vw)')};
  z-index: 10;
  transition: transform .5s;
  
  @media(max-width: 960px) {
    min-width: 50vw;
    transform: ${(props) => (props.opened ? 'translateX(0)' : 'translateX(-50vw)')};
  }
  
  @media(max-width: 480px) {
    padding-top: 30px;
    min-width: 100vw;
    transform: ${(props) => (props.opened ? 'translateX(0)' : 'translateX(-100vw)')};
  }
`;

export const Wrapper = styled.div`
  margin-left: auto;
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  flex-grow: 1;
`;

export const NavItem = styled.li`

`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  font-family: Roboto, Arial, sans-serif;
  letter-spacing: 1px;
  transition: background-color .3s;
  
  :hover {
    background-color: #383838;
  }
  
  @media(max-width: 480px) {
    font-size: 20px;
  }
`;
