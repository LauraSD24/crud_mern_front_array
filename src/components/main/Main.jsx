import './main.css';
import {useNavigate} from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <h1>Registro de usuarios</h1>
      <div className="containerList">
        <button className='btn' onClick={()=>navigate("/add")}>Agregar</button>
        <p></p>
        <div className="containerListUsers">
          <div className='titlesUser'>
            <h3 className='item'>Nombre</h3>
            <h3 className='item'>Identificación</h3>
            <h3 className='item'>Teléfono</h3>
            <h3 className='item'>Correo</h3>
          </div>
          <div className="user">
            <p className='item'>Laura</p>
            <p className='item'>1044937657</p>
            <p className='item'>311328475</p>
            <p className='item'>laurasdsfggghmmmmmmmmmmg@gmail.com</p>
            <div className='item containerIcons'>
            <i class="uil uil-edit" onClick={()=>navigate("/edit")}></i>
            <i class="uil uil-trash-alt "></i>
            </div>
          </div>
          <div className="user">
            <p className='item'>Laura</p>
            <p className='item'>1044937657</p>
            <p className='item'>311328475</p>
            <p className='item'>laurasdsfggghg@gmail.com</p>
            <div className='item containerIcons'>
            <i class="uil uil-edit "></i>
            <i class="uil uil-trash-alt "></i>
            </div>
          </div>
          <div className="user">
            <p className='item'>Laura</p>
            <p className='item'>1044937657</p>
            <p className='item'>311328475</p>
            <p className='item'>laurasdsfggghg@gmail.com</p>
            <div className='item containerIcons'>
            <i class="uil uil-edit "></i>
            <i class="uil uil-trash-alt "></i>
            </div>
          </div>
          <div className="user">
            <p className='item'>Laura</p>
            <p className='item'>1044937657</p>
            <p className='item'>311328475</p>
            <p className='item'>laurasdsfggghg@gmail.com</p>
            <div className='item containerIcons'>
            <i class="uil uil-edit "></i>
            <i class="uil uil-trash-alt "></i>
            </div>
          </div>
          <div className="user">
            <p className='item'>Laura</p>
            <p className='item'>1044937657</p>
            <p className='item'>311328475</p>
            <p className='item'>laurasdsfggghg@gmail.com</p>
            <div className='item containerIcons'>
            <i class="uil uil-edit "></i>
            <i class="uil uil-trash-alt "></i>
            </div>
          </div>
          <div className="user">
            <p className='item'>Laura</p>
            <p className='item'>1044937657</p>
            <p className='item'>311328475</p>
            <p className='item'>laurasdsfggghg@gmail.com</p>
            <div className='item containerIcons'>
            <i class="uil uil-edit "></i>
            <i class="uil uil-trash-alt "></i>
            </div>
          </div>
          <div className="user">
            <p className='item'>Laura patricia salguedo delgado</p>
            <p className='item'>1044937657</p>
            <p className='item'>3113284757</p>
            <p className='item'>laurasdsfggghg@gmail.com</p>
            <div className='item containerIcons'>
            <i class="uil uil-edit "></i>
            <i class="uil uil-trash-alt "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;