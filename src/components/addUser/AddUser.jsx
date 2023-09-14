import './addUser.css';
import {useNavigate} from 'react-router-dom';

function AddUser() {
  const navigate = useNavigate();
  return (
    <div className='main'>
        <h1>Nuevo registro</h1>
        <form action="" className="form">
          <input type="text" className="input" placeholder='Nombre completo'/>
          <input type="number" className="input" placeholder='Número de identificación'/>
          <input type="number" className="input" placeholder='Teléfono'/>
          <input type="email" className="input" placeholder='Correo electrónico'/>
        </form>
        <div className='containerBtns'>
          <button className="btn" onClick={()=>navigate("/")}>Volver</button>
          <button className="btn">Guardar</button>
        </div>
    </div>
  );
}

export default AddUser;