import styled from 'styled-components';

export const Nav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  min-width: 30vw;
  min-height: 100vh;
  height: 100%;
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
