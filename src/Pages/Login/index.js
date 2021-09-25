import { NavBar } from "../../Components/NavBar";
const Login = ({ isLogged }) => {
  return (
    <div>
      <NavBar isLogged={isLogged} />
    </div>
  );
};
export default Login;
