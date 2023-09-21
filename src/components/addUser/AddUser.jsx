import { useState } from "react";
import "./addUser.css";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    identity: "",
    phone: "",
    email: "",
  });

  const createNewUser = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      if (
        newUser.name === "" ||
        newUser.identity === "" ||
        newUser.phone === "" ||
        newUser.email === ""
      ) {
        alert("Hay campos vacíos");
      } else {
        const request = await fetch("http://localhost:4000/create-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        const dataResponse = await request.json();
        if (dataResponse.response === true) {
          console.log(dataResponse.response);
          setNewUser({
            name: "",
            identity: "",
            phone: "",
            email: "",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main">
      <h1>Nuevo registro</h1>
      <form action="" className="form">
        <input
          type="text"
          name="name"
          value={newUser.name}
          onInput={(e) => createNewUser(e)}
          className="input"
          placeholder="Nombre completo"
        />
        <input
          type="number"
          name="identity"
          value={newUser.identity}
          onInput={(e) => createNewUser(e)}
          className="input"
          placeholder="Número de identificación"
        />
        <input
          type="number"
          name="phone"
          value={newUser.phone}
          onInput={(e) => createNewUser(e)}
          className="input"
          placeholder="Teléfono"
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onInput={(e) => createNewUser(e)}
          className="input"
          placeholder="Correo electrónico"
        />
      </form>
      <div className="containerBtns">
        <button className="btn" onClick={() => navigate("/")}>
          Volver
        </button>
        <button className="btn" onClick={(e) => saveUser(e)}>
          Guardar
        </button>
      </div>
    </div>
  );
}

export default AddUser;
