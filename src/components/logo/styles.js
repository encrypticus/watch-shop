import styled from 'styled-components';
import logoImg from './img/logo-img.png';
import logoLightImg from './img/logo-light-img.png';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-left: 49px;
  position: relative;
  font-family: Playfair Display, Arial, sans-serif;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.14em;
  color: ${(props) => props.light ? '#fff' : '#555248'};
  text-decoration: none;
  text-transform: uppercase;
  
  ::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -22px;
    width: 20px;
    height: 20px;
    background-image:${(props) => props.light === 'true' ? `url(${logoLightImg})` : `url(${logoImg})`};
  }
`;
