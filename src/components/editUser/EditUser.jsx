import { useContext, useEffect, useState } from 'react';
import './editUser.css';
import {useNavigate, useParams} from 'react-router-dom';
import { ContextUser } from '../../context/ContextProviderUser';

function EditUser() {
  const params = useParams();
  const {listUsers,setListUsers} = useContext(ContextUser);
  const [user,setUser] = useState({
    name: "",
    identity: "",
    phone: "",
    email: ""
  });
  const navigate = useNavigate();

  const handlerInputEdit = (e) =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const updateUser = async (e) =>{
    e.preventDefault();
    try {
      if (user.name==="" || user.identity==="" || user.phone==="" || user.email==="") {
        alert("Hay campos vacíos");
      }else{
      const request = await fetch("http://localhost:4000/update",{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });
      const dataResponse = await request.json();
      console.log(dataResponse);
      if(dataResponse.response){
        navigate("/");
      }
    }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    const userFind = listUsers.find((item)=>item.identity===params.identity);
    setUser({...userFind});
  },[]);

  

  return (
    <div className='main'>
        <h1>Editar registro</h1>
        <form action="" className="form">
          <input onInput={(e)=>handlerInputEdit(e)} name='name' value={user.name} type="text" className="input"/>
          <input onInput={(e)=>handlerInputEdit(e)} name='identity' readOnly value={user.identity} type="number" className="input"/>
          <input onInput={(e)=>handlerInputEdit(e)} name='phone' value={user.phone} type="number" className="input"/>
          <input onInput={(e)=>handlerInputEdit(e)} name='email' value={user.email} type="email" className="input"/>
        </form>
        <div className='containerBtns'>
          <button className="btn" onClick={()=>navigate("/")}>Cancelar</button>
          <button className="btn" onClick={(e)=>updateUser(e)}>Guardar</button>
        </div>
    </div>
  );
}

export default EditUser;