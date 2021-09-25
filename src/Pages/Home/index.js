import { NavBar } from "../../Components/NavBar";

const Home = ({ isLogged }) => {
  //ir pra login ou userPage
  return (
    <div>
      <NavBar isLogged={isLogged} />
    </div>
  );
};
export default Home;
