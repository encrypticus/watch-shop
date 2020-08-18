import styled from 'styled-components';

const StyledSpan = styled.span`
  background-color: ${(props) => (props.color ? `${props.color} !important` : '')};
`;

export default StyledSpan;
