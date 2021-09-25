import { NavBarStyled } from "./style";
import { useHistory } from "react-router";
import { ButtonMenuDrop, ButtonsDefult } from "./../Buttons";

export const NavBar = ({ isLogged }) => {
  const history = useHistory();

  const handleRoute = (path) => {
    history.push(path);
  };

  return (
    <NavBarStyled>
      <div>logo</div>
      <nav>
        <ul>
          <li>
            <ButtonsDefult onClick={() => handleRoute("/")}>Home</ButtonsDefult>
          </li>
          <li>
            <ButtonsDefult onClick={() => handleRoute("/register")}>
              Cadastre-se
            </ButtonsDefult>
          </li>
          <li>
            <ButtonsDefult onClick={() => handleRoute("/login")}>
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
  );
};
