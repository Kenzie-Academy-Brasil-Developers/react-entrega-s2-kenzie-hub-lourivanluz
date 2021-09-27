import { NavBar } from "../../Components/NavBar";
import { Container, FormContainer } from "./style";
import { useHistory } from "react-router";
import { InputFild } from "../../Components/InputFild";
import { ButtonsDefult } from "../../Components/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../../Schema/Schema";
import api from "./../../Services/api";

const Register = ({ isAuthenticated, setIsAuthenticated, setIdUser }) => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  const schemaform = schema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaform),
  });

  const handleLogin = ({ email, password }) => {
    api
      .post("/sessions", { email, password })
      .then((response) => {
        const {
          token,
          user: { id },
        } = response.data;

        setIdUser(id);
        localStorage.clear();
        localStorage.setItem("@kenzieHub:token:", JSON.stringify(token));
        setIsAuthenticated(true);
        history.push("/userPage");
      })
      .catch((_) => console.log("edeu erro"));
  };

  const onFormSubmit = (data) => {
    api
      .post("/users", data)
      .then((_) => {
        handleLogin(data);
      })
      .catch((error) => console.log("errou"));
  };

  return (
    <Container>
      <NavBar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <FormContainer>
        <div className="titleForm">
          <h1>Registre-se</h1>
          <p>
            Já tem uma Conta ?
            <span onClick={() => handleClick("/login")}>Faça Login</span>
          </p>
        </div>
        <div className="containerForm">
          <form className="inputForm" onSubmit={handleSubmit(onFormSubmit)}>
            <InputFild
              required
              id="name"
              type="text"
              name="Nome completo"
              register={register}
              error={!!errors.name}
              messageerror={errors.name?.message}
            />
            <InputFild
              register={register}
              required
              id="email"
              type="text"
              name="Email"
              error={!!errors.email}
              messageerror={errors.email?.message}
            />
            <InputFild
              register={register}
              required
              id="password"
              type="password"
              name="Senha"
              error={!!errors.password}
              messageerror={errors.password?.message}
            />
            <InputFild
              register={register}
              required
              id="bio"
              type="text"
              name="Bio"
              error={!!errors.bio}
              messageerror={errors.bio?.message}
            />
            <InputFild
              register={register}
              required
              id="contact"
              type="text"
              name="Contato"
              error={!!errors.contact}
              messageerror={errors.contact?.message}
            />
            <InputFild
              register={register}
              required
              id="course_module"
              type="text"
              name="Módulo"
              error={!!errors.course_module}
              messageerror={errors.course_module?.message}
            />
            <ButtonsDefult
              type={"submit"}
              borderradius={"15px"}
              hoverbcolor={"#057d9f"}
              hovercolor={"white"}
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
