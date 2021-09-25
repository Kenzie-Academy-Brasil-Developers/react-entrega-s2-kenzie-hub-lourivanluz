import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ButtonStyled = styled(Button)`
  height: 30px;
  color: ${({ fontcolor = "#057d9f" }) => fontcolor};
  border-radius: ${({ borderRadius = "0px" }) => borderRadius};
  border: ${({ border = "1px solid #057d9f" }) => border};

  padding: 15px;
  &:hover {
    color: ${({ hoverColor = "white" }) => hoverColor};
    background-color: ${({ hoverBColor = "inherit" }) => hoverBColor};
    border: ${({ hoverborder = "none" }) => hoverborder};
  }
`;
