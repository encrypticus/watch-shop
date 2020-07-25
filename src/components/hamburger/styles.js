import styled from 'styled-components';

export const StyledSpan = styled.span`
  background-color: ${(props) => (props.color ? `${props.color} !important` : '')};
`;
