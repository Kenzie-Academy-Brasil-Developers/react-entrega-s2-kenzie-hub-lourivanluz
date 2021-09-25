import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

export const NavBarStyled = styled(Box)`
  box-shadow: 1px 5px 9px -2px rgba(5, 5, 5, 0.41);
  padding: 15px;
  position: absolute;
  height: 53px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: #04607b;

  ul {
    display: flex;
    align-items: center;
  }
`;
