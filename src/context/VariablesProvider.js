import React from "react";
import portfolio1 from "../img/a.webp";
import portfolio2 from "../img/b.webp";
import portfolio3 from "../img/c.webp";
import portfolio4 from "../img/d.webp";
import portfolio5 from "../img/e.webp";
import portfolio6 from "../img/f.webp";

import logo from "../img/logo.png";

import historia from "../img/690x460.webp";


export const VariablesContext = React.createContext();

const VariablesProvider = (props) => {
  const variablesGlobales = {
    iframeUbicacion: "",
    tituloUbicacion: "Ubicación",
    direccion: "",
    mailTo: "",
    mail: "",
    iframeAlt: "",
    logo: logo,
    altLogo: "logo tuentrada",
    venueName: "YsY A",
    tuentradaName: "tuentrada.com",
    linkTuentrada: "https://tuentrada.com",
    linkVenueFb: "https://www.facebook.com/ysyashakur",
    linkVenueTw: "https://twitter.com/ysy__a",
    linkVenueIg: "https://www.instagram.com/ysy__a/",
    volver: "Volver",
    tituloEventos: "PRÓXIMOS SHOWS",
    tituloImagenes: "Imagenes",
    portfolioImg1: portfolio1,
    portfolioImg2: portfolio2,
    portfolioImg3: portfolio3,
    portfolioImg4: portfolio4,
    portfolioImg5: portfolio5,
    portfolioImg6: portfolio6,
    elementoNavbar1: "Shows",
    elementoNavbar2: "Descripción",
    elementoNavbar3: "Imagenes",
    elementoNavbar4: "Ubicacion",
    tituloInicio: "",
    botonInicio: "SHOWS",
    tituloHistoriaArriba: "YSY A",
    tituloHistoriaAbajo: "",
    imagenHistoria: historia,
    descripcion1:
      "Alejo Nahuel Acosta, mejor conocido en el mundo del espectáculo como Ysy A, es un cantante y compositor argentino que nació el 12 de julio del año 1998. Este intérprete se convirtió rápidamente en uno de los cantantes de rap y hip hop con mayor influencia en Argentina. El artista inició su carrera musical, desde muy joven, como un rapero freestyle en las calles de la ciudad de Buenos Aires",
    descripcion2:
      "",
  };

  const [variables, setVariables] = React.useState(variablesGlobales);

  return (
    <VariablesContext.Provider value={{ variables, setVariables }}>
      {props.children}
    </VariablesContext.Provider>
  );
};

export default VariablesProvider;
