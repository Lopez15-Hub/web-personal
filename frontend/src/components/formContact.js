import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">
         
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <form action="" className=" border mt-3 row">
              <h1 className="text-center display-5">¿Tienes dudas? ¡Contáctanos!</h1>
                <div className="form-group mt-5">
                  <label className="" htmlFor="">
                    Nombre
                  </label>
                  <input type="text" className="col form-control" />
                  <label className=" mt-3" htmlFor="">
                    Apellido
                  </label>
                  <input type="text" className=" form-control" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="" className="mt-2 mb-2">
                    Email
                  </label>
                  <input type="Email" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="mt-2 mb-2" htmlFor="">
                    Mensaje
                  </label>
                  <textarea className="form-control mb-" name="" id="" cols="83" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
