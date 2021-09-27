import { NavBar } from "../../Components/NavBar";
import { Container } from "./style";

const Home = ({ isLogged, setIsLogged }) => {
  return (
    <Container>
      <NavBar isLogged={isLogged} setIsLogged={setIsLogged} />
    </Container>
  );
};
export default Home;
