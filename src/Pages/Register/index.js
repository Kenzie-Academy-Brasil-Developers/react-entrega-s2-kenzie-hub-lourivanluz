import { NavBar } from "../../Components/NavBar";
import { Container, FormContainer } from "./style";
import { useHistory } from "react-router";
import { InputFild } from "../../Components/InputFild";
import { ButtonsDefult } from "../../Components/Buttons";

const Register = ({ isLogged }) => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <NavBar isLogged={isLogged} />
      <FormContainer>
        <div className="titleForm">
          <h1>Registre-se</h1>
          <p>
            Já tem uma Conta ?
            <span onClick={() => handleClick("/login")}>Faça Login</span>
          </p>
        </div>
        <div className="containerForm">
          <form className="inputForm">
            <InputFild required id="name" type="text" name="Nome completo" />
            <InputFild required id="email" type="email" name="Email" />
            <InputFild required id="senha" type="password" name="Senha" />
            <InputFild required id="bio" type="text" name="Bio" />
            <InputFild required id="contact" type="text" name="Contato" />
            <InputFild required id="course_module" type="text" name="Módulo" />
            <ButtonsDefult
              borderRadius={"15px"}
              hoverBColor={"#057d9f"}
              hoverColor={"white"}
              hoverborder={"1px solid #057d9f"}
            >
              Cadastre-se
            </ButtonsDefult>
          </form>
          <div className=" divider">
            <div></div>
          </div>

          <div className="loginForm">
            <div>facebook</div>
            <div>google</div>
          </div>
        </div>
        <footer>
          <p>
            * Ao se registrar, você concorda com os nossos
            <span>Termos de Uso</span>, em receber emails e atualizações do Wix
            e confirma que leu nossa <span>Política de Privacidade</span>.
          </p>
          <div>
            <div className="divider"></div>
          </div>
          <p>
            Este site é protegido pelo reCAPTCHA Enterprise e a
            <span>Política de Privacidade</span> e <span>Termos de Uso</span> do
            Google se aplicam.
          </p>
        </footer>
      </FormContainer>
    </Container>
  );
};
export default Register;
