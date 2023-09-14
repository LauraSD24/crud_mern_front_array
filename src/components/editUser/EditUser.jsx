import './editUser.css';
import {useNavigate} from 'react-router-dom';

function EditUser() {
  const navigate = useNavigate();
  return (
    <div className='main'>
        <h1>Editar registro</h1>
        <form action="" className="form">
          <input type="text" className="input"/>
          <input type="number" className="input"/>
          <input type="number" className="input"/>
          <input type="email" className="input"/>
        </form>
        <div className='containerBtns'>
          <button className="btn" onClick={()=>navigate("/")}>Cancelar</button>
          <button className="btn">Guardar</button>
        </div>
    </div>
  );
}

export default EditUser;