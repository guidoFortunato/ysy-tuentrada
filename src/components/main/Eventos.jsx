import React from "react";
import { VariablesContext } from "../../context/VariablesProvider";
import { Evento } from "./Evento/";



const Eventos = (props) => {

  const { variables } = React.useContext(VariablesContext);


  return (
    <main id="main">
      <section id="team">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">{variables.tituloEventos}</h3>
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
           
             <Evento
              title="TUCUMAN"
              date="VIE 14 ABR 2023"
              image="https://www.tuentrada.com/images/63efcd70198a8.webp"
              buy="https://www.tuentrada.com/eventos/detalle/YSY-A/581849177433"
            />
            <Evento
              title="SALTA"
              date="SAB 15 ABR 2023"
              image="https://www.tuentrada.com/images/640a0a279b002.webp"
              buy="https://www.tuentrada.com/eventos/detalle/YSYA-SALTA/583066461895"
            />
            <Evento
              title="SANTA FE"
              date="DOM 30 ABR 2023"
              image="https://www.tuentrada.com/images/6422304a54a93.webp"
              buy="https://www.tuentrada.com/eventos/detalle/SantaFe/579595836120"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Eventos;
