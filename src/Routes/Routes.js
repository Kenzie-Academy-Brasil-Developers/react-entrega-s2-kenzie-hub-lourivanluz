import { useState } from "react";
import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserPage from "../Pages/UserPage";
import { MainStyled } from "./../Components/Pagebase";

const Routes = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <MainStyled>
      <Switch>
        <Route exact path="/">
          <Home isLogged={isLogged} />
        </Route>
        <Route path="/login">
          <Login isLogged={isLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route path="/register">
          <Register isLogged={isLogged} />
        </Route>
        <Route path="/userPage">
          <UserPage isLogged={isLogged} />
        </Route>
      </Switch>
    </MainStyled>
  );
};

export default Routes;
