import { Box, styled } from "@mui/system";

export const Container = styled(Box)`
  width: 100%;
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #4b9fb7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(Box)`
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  background-color: white;
  border: 1px solid red;
  display: flex;
  flex-direction: column;

  .titleForm {
    text-align: center;
    span {
      margin-left: 5px;
      color: #057d9f;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .containerForm {
    display: flex;
    padding: 15px;

    .inputForm {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40%;
    }
    .divider {
      width: 20%;
      display: flex;
      justify-content: center;
      > div {
        background-color: gray;
        height: inherit;
        width: 1px;
      }
    }

    .loginForm {
      width: 40%;
    }
  }
`;
