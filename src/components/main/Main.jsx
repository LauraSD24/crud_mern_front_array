import { useContext, useEffect } from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";
import { ContextUser } from "../../context/ContextProviderUser";

function Main() {
  const navigate = useNavigate();
  const { listUsers, setListUsers } = useContext(ContextUser);

  const deleteUserRequest = async (id) =>{
    try {
      const request = await fetch("http://localhost:4000/delete/"+id,{
        method: "DELETE"
      });
      const dataResponse = await request.json();
      if(dataResponse.response){
        setListUsers(listUsers.filter((item)=>item.identity!==dataResponse.identityUserDelete))
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    const getAllUsers = async () => {
      try {
        const request = await fetch("http://localhost:4000/get-all-users");
        const response = await request.json();
        setListUsers([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    getAllUsers();
  },[]);
  return (
    <div className="main">
      <h1>Registro de usuarios</h1>
      <div className="containerList">
        <button className="btn" onClick={() => navigate("/add")}>
          Agregar
        </button>
        <p></p>
        <div className="containerListUsers">
          <div className="titlesUser">
            <h3 className="item">Nombre</h3>
            <h3 className="item">Identificación</h3>
            <h3 className="item">Teléfono</h3>
            <h3 className="item">Correo</h3>
          </div>
          {listUsers.map((item) => {
            return (
              <div key={item.identity} className="user">
                <p className="item">{item.name}</p>
                <p className="item">{item.identity}</p>
                <p className="item">{item.phone}</p>
                <p className="item">{item.email}</p>
                <div className="item containerIcons">
                  <i className="uil uil-edit" onClick={() => navigate("/edit/"+item.identity)}></i>
                  <i className="uil uil-trash-alt" onClick={()=>deleteUserRequest(item.identity)}></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
