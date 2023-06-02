import React from "react";
import { VariablesContext } from "../../context/VariablesProvider";
import { Evento } from "./Evento";



const FormContacto = (props) => {

  const { variables } = React.useContext(VariablesContext);


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

          <div className="row justify-content-center">
           
             {/* <Evento
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
