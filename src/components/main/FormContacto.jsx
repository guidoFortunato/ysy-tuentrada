import React, { useState } from "react";
import axios from 'axios';
import { VariablesContext } from "../../context/VariablesProvider";
import { Evento } from "./Evento";

const initialState = {
  nombre: "",
  apellido: "",
  email: "",
}

const FormContacto = (props) => {
  const { variables } = React.useContext(VariablesContext);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      'Access-Control-Allow-Origin': '*', // Cambia '*' por el dominio permitido si es conocido
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    // Realiza una solicitud POST a la URL de Mautic
    axios.post('https://mautic.tuentrada.com/', formData, { headers })
      .then((response) => {
        console.log({formData},'enviada correctamente')
      })
      .catch((error) => {
        throw new Error(error)
      });
  };

  return (
    <main id="main">
      <section id="team">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">{variables.tituloFormContacto}</h3>
              <div className="section-title-divider"></div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-12 text-center mt-2 mb-2">
              <div className="container-alerta alerta-danger" role="alert">
                <h4 className="text-center margin-0">
                  No hay shows disponibles en este momento
                </h4>
              </div>
            </div>

          </div> */}
          <div className="row justify-content-center">
            <form onSubmit={ handleSubmit  }>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  placeholder="Ingresa tu apellido"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Ingresa tu correo electrónico"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
            {/*            
             <Evento
              title="POSADAS"
              date="MIE 24 MAY 2023"
              image="https://www.tuentrada.com/images/6453f581811e1.webp"
              buy="https://www.tuentrada.com/eventos/detalle/YSY-Misiones/908784934163"
            />
            <Evento
              title="FORMOSA"
              date="JUE 25 MAYO 2023"
              image="https://www.tuentrada.com/images/6453f382b02e4.webp"
              buy="https://www.tuentrada.com/eventos/detalle/YSY-Formosa/627009947775"
            /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FormContacto;
