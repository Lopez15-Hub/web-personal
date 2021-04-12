import React, { Component } from "react";
import { Link } from "react-router-dom";
import Inicio from '../components/viewsAreaPanel/inicio';
class Panel extends Component {

  render() {
    return (
      <div className="">
        <div className="row">
          <h1>Panel</h1>
          <hr />
          <div className="col-2 shadow">
            <div className="backgroundUl ">
              <div className="group row m-2">
                <h6 className="under text-center">General</h6>
                <Link to="/inicio"  className="mt-2 nav-item nav-item-list">
                 Inicio
                </Link>

                <Link to="/" className="mt-2 nav-item nav-item-list">
                  Estadísticas
                </Link>

                <Link to="/" className="mt-2 nav-item nav-item-list">
                  Añadir 
                </Link>
              </div>
              <hr/>
              <div className="group row m-2">
                <h6 className="under text-center">Usuarios</h6>
                <Link to="/" className="nav-item mt-2 nav-item-list">
                 Ver lista de usuarios
                </Link>

                <Link to="/" className="nav-item mt-2 nav-item-list">
                  Añadir un usuario
                </Link>

                <Link to="/" className=" nav-item mt-2 nav-item-list">
                  Administrar privilegios
                </Link>
              </div>
            </div>
          </div>

          <div className="col-10 container border">
            <div className="row">
              <div className="col-10 border">
                <Inicio/>
              </div>
              <div className="col-2 border">
                <h1>Hola mundo 2</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Panel;
