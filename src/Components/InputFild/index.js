import { InputStyled } from "./Inptut";
import { Label } from "./Label";
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const InputFild = ({ ...ress }) => {
  return (
    <DivStyled>
      <InputStyled {...ress} />
      <Label htmlFor={ress.id} {...ress}>
        {ress.name}
      </Label>
    </DivStyled>
  );
};
