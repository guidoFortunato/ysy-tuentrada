import React from "react";

import "./evento.css";

export const Evento = ({ title, image, date, buy }) => {
    const dia = date.split(" ")[0]
    const numero = date.split(" ")[1]
    const mes = date.split(" ")[2]
    const anio = date.split(" ")[3]
  return (
    <>
      <article className="col-12 col-sm-6 col-lg-4 col-xl-3 text-center mt-2 mb-2">
        <div className="card">
          <img src={image} className="card-img-top" alt="ysy a" />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <hr />

            <div className="container-tuentrada">
              <div className="container-tuentrada__col1 me-5">
                {/* <span className='fw-bold'>SAB</span> */}
                <span className="fw-bold tamaño-letra-fecha">
                  {dia}
                </span>

                {/* {console.log(date.split('-')[0]) } */}
                <span className="fecha-tuen">{numero}</span>

                <span className="fw-bold tamaño-letra-fecha">
                  {mes} {anio}
                </span>
              </div>

              <div className="container-tuentrada__col2">
                <a
                  className="btn btn-primary btn-color mt-4 animacion-boton fw-bold"
                  href={buy}
                  target="_blank"
                  rel="noreferrer"
                  // onClick={()=>idEvento(id)}
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

