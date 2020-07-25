import styled from 'styled-components';

export const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  min-width: 30vw;
  height: 100vh;
  padding: 10px;
  background-color: #444240;
  transform: ${(props) => (props.opened ? 'translateX(0)' : 'translateX(-30vw)')};
  z-index: 10;
  transition: transform .5s;
  @media(max-width: 960px) {
    min-width: 50vw;
    transform: ${(props) => (props.opened ? 'translateX(0)' : 'translateX(-50vw)')};
  }
`;

export const Wrapper = styled.div`
  margin-left: auto;
`;
