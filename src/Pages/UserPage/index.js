import { NavBar } from "../../Components/NavBar";
const UserPage = ({ isLogged }) => {
  return (
    <div>
      <NavBar isLogged={isLogged} />
    </div>
  );
};
export default UserPage;
