import styled from "styled-components";
export const Label = styled.label`
  display: block;
  cursor: text;
  position: absolute;
  top: 8px;
  left: 8px;
  transition: all linear 0.1s;
  background-color: ${({ backgroundColor = "white" }) => backgroundColor}; ;
`;
