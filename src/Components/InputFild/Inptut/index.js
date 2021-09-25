import styled from "styled-components";
export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding-left: 5px;
  background-color: ${({ backgroundColor = "white" }) => backgroundColor};
  border: 1px solid rgb(63, 63, 63);
  margin-bottom: 20px;
  color: ${({ color = "black" }) => color};

  &:hover {
    border-color: gray;
  }
  &:focus {
    outline: none;
    border: 1px solid #057d9f;
  }
  &:focus::placeholder {
    color: transparent;
  }

  &:focus + label {
    display: block;
    background-color: ${({ backgroundColor = "white" }) => backgroundColor};
    position: absolute;
    padding: 0 5px;
    color: #057d9f;
    left: 10px;
    top: -10px;
  }
  &:required:valid + label {
    display: block;
    background-color: ${({ backgroundColor = "white" }) => backgroundColor};
    padding: 0 5px;
    position: absolute;
    color: #057d9f;
    left: 10px;
    top: -10px;
  }

  &:required:valid {
    border: 2px solid #057d9f;
  }
`;
