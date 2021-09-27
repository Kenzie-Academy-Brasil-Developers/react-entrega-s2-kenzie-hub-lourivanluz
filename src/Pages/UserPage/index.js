import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { NavBar } from "../../Components/NavBar";
import api from "../../Services/api";
import { useForm } from "react-hook-form";
import { DivStyled } from "./style";
import { InputFild } from "../../Components/InputFild";
import { ButtonsDefult } from "../../Components/Buttons";
import { TextAreaFild } from "../../Components/TextAreaFild";
import { Card } from "../../Components/Card";
const UserPage = ({ isAuthenticated, setIsAuthenticated }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token:")) || ""
  );
  const [idUser] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:idUser:")) || ""
  );
  const [user, setUser] = useState({});

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (idUser) {
      api
        .get(`/users/${idUser}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((err) => console.log("errou"));
    }
  }, [user]);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const newTech = ({ title, status }) => {
    api
      .post(
        "/users/techs/",
        { title, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  const newWork = ({ titles, description }) => {
    const data = {
      title: titles,
      description: description,
    };
    data.deploy_url = "https://kenziehub.herokuapp.com";

    api
      .post("/users/works/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const deleteCard = (idCard, type) => {
    api
      .delete(`/users/${type}/${idCard}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => console.log("erro ao deletar"));
  };

  return (
    <DivStyled>
      <NavBar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div className="form">
        <div>
          <h1>Cadastre uma nova tecnologia ou trabalho</h1>
        </div>
        <div className="containerForm">
          <div className="formType">
            <form onSubmit={handleSubmit(newTech)}>
              <InputFild
                type="text"
                id="title"
                name="Titulo"
                register={register}
                required
              />
              <InputFild
                type="text"
                id="status"
                name="Nível"
                register={register}
                required
              />

              <ButtonsDefult
                type={"submit"}
                borderradius={"15px"}
                hoverbcolor={"#057d9f"}
                hovercolor={"white"}
                hoverborder={"1px solid #057d9f"}
                fontsizer={"12px"}
              >
                Tecnologia
              </ButtonsDefult>
            </form>
          </div>
          <div className="formType">
            <form onSubmit={handleSubmit(newWork)}>
              <InputFild
                type="text"
                id="titles"
                name="Título"
                register={register}
                required
              />
              <TextAreaFild
                id="description"
                name="Descrição"
                register={register}
                required
              />
              <ButtonsDefult
                type={"submit"}
                borderradius={"15px"}
                hoverbcolor={"#057d9f"}
                hovercolor={"white"}
                hoverborder={"1px solid #057d9f"}
                fontsizer={"12px"}
              >
                Trabalho
              </ButtonsDefult>
            </form>
          </div>
        </div>
      </div>
      <ul className="display">
        {user.techs?.map((item, index) => (
          <li key={index}>
            <Card
              title={item.title}
              status={item.status}
              del={deleteCard}
              idCard={item.id}
              type="techs"
            />
          </li>
        ))}
        {user.works?.map((item, index) => (
          <li key={index}>
            <Card
              title={item.title}
              description={item.description}
              del={deleteCard}
              idCard={item.id}
              type="works"
            />
          </li>
        ))}
      </ul>
    </DivStyled>
  );
};
export default UserPage;
