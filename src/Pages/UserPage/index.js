import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { NavBar } from "../../Components/NavBar";
import api from "../../Services/api";
import { useForm } from "react-hook-form";
import { DivStyled } from "./style";
const UserPage = ({ isAuthenticated, setIsAuthenticated, idUser }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token:")) || ""
  );

  const [user, setUser] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (idUser) {
    api
      .get(`/users/${idUser}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log("errou"));
  }

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const newTech = (data) => {
    api
      .post("/users/techs/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <DivStyled>
      <NavBar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <form onSubmit={handleSubmit(newTech)}>
        <input type="text" placeholder="titulo" {...register("title")} />
        <input type="text" placeholder="status" {...register("status")} />
        <button type="submit">cadastrar</button>
      </form>

      <ul>
        {user.techs?.map((item, index) => (
          <li
            key={index}
          >{`nome da tec: ${item.title} status${item.status}`}</li>
        ))}
      </ul>
    </DivStyled>
  );
};
export default UserPage;
