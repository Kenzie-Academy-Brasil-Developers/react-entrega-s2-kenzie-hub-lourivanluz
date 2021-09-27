import { useState } from "react";
import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserPage from "../Pages/UserPage";
import { MainStyled } from "./../Components/Pagebase";

const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("@kenzieHub:token:") || ""
  );
  const [idUser, setIdUser] = useState("");

  return (
    <MainStyled>
      <Switch>
        <Route exact path="/">
          <Home
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Route>
        <Route path="/login">
          <Login
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            setIdUser={setIdUser}
          />
        </Route>
        <Route path="/register">
          <Register
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            setIdUser={setIdUser}
          />
        </Route>
        <Route path="/userPage">
          <UserPage
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            idUser={idUser}
          />
        </Route>
      </Switch>
    </MainStyled>
  );
};

export default Routes;
