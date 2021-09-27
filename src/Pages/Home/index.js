import { NavBar } from "../../Components/NavBar";
import { Container } from "./style";

const Home = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <Container>
      <NavBar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Container>
  );
};
export default Home;
