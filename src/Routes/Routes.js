import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserPage from "../Pages/UserPage";
import { MainStyled } from "./../Components/Pagebase";

const Routes = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [idUser, setIdUser] = useState("");
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    if (token) {
      return setIsLogged(true);
    }
  }, [isLogged]);

  return (
    <MainStyled>
      <Switch>
        <Route exact path="/">
          <Home isLogged={isLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route path="/login">
          <Login
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            setIdUser={setIdUser}
          />
        </Route>
        <Route path="/register">
          <Register
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            setIdUser={setIdUser}
          />
        </Route>
        <Route path="/userPage">
          <UserPage
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            idUser={idUser}
          />
        </Route>
      </Switch>
    </MainStyled>
  );
};

export default Routes;
