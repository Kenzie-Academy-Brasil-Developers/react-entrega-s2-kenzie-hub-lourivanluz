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
          />
        </Route>
        <Route path="/register">
          <Register
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Route>
        <Route path="/userPage">
          <UserPage
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Route>
      </Switch>
    </MainStyled>
  );
};

export default Routes;
