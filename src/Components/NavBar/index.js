import { Container, NavBarStyled } from "./style";
import { useHistory } from "react-router";
import { ButtonMenuDrop, ButtonsDefult } from "./../Buttons";

export const NavBar = ({ isLogged }) => {
  const history = useHistory();

  const handleRoute = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <NavBarStyled>
        <div>logo</div>
        <nav>
          <ul>
            <li>
              <ButtonsDefult
                fontcolor={"#4b9fb7"}
                border={"none"}
                onClick={() => handleRoute("/")}
              >
                Home
              </ButtonsDefult>
            </li>
            <li>
              <ButtonsDefult
                fontcolor={"#4b9fb7"}
                border={"none"}
                onClick={() => handleRoute("/register")}
              >
                Cadastre-se
              </ButtonsDefult>
            </li>
            <li>
              <ButtonsDefult
                fontcolor={"#4b9fb7"}
                border={"none"}
                onClick={() => handleRoute("/login")}
              >
                {isLogged ? "Outra conta" : "Login"}
              </ButtonsDefult>
            </li>
            {isLogged && (
              <li>
                <ButtonMenuDrop onClick={() => handleRoute("/userPage")}>
                  Minha pagina
                </ButtonMenuDrop>
              </li>
            )}
          </ul>
        </nav>
      </NavBarStyled>
    </Container>
  );
};
