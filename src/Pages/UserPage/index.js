import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { NavBar } from "../../Components/NavBar";
import api from "../../Services/api";
import { useForm } from "react-hook-form";
import { DivStyled } from "./style";
const UserPage = ({ isLogged, setIsLogged, idUser }) => {
  const [token] = useState(
    JSON.stringify(localStorage.getItem("@kenzieHub:token")) || ""
  );
  const [techs, setTechs] = useState([]);
  const [works, setWorks] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (idUser) {
      api
        .get(`/users/${idUser}`)
        .then((response) => {
          setTechs(response.techs);
          setWorks(response.works);
        })
        .catch((err) => console.log("errou"));
    }
  }, []);

  if (!isLogged) {
    return <Redirect to="/login" />;
  }

  const newTech = (data) => {
    api
      .post("/users/techs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      })
      .then((response) => console.log("deu certo"))
      .catch((err) => console.log("ndeu"));
  };

  return (
    <DivStyled>
      <NavBar isLogged={isLogged} setIsLogged={setIsLogged} />

      <form onSubmit={handleSubmit(newTech)}>
        <input type="text" placeholder="titulo" {...register("title")} />
        <input type="text" placeholder="status" {...register("status")} />
        <button type="submit">cadastrar</button>
      </form>

      <ul>
        {techs?.map((item, index) => (
          <li
            key={index}
          >{`nome da tec: ${item.title} status${item.status}`}</li>
        ))}
      </ul>
    </DivStyled>
  );
};
export default UserPage;
