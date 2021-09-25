import { NavBar } from "../../Components/NavBar";
import { Container } from "./style";

const Home = ({ isLogged }) => {
  //ir pra login ou userPage
  return (
    <Container>
      <NavBar isLogged={isLogged} />
    </Container>
  );
};
export default Home;
