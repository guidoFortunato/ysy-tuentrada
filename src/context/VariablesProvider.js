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
    tituloFormContacto: "Contactanos",
    tituloImagenes: "Galería",
    portfolioImg1: portfolio1,
    portfolioImg2: portfolio2,
    portfolioImg3: portfolio3,
    portfolioImg4: portfolio4,
    portfolioImg5: portfolio5,
    portfolioImg6: portfolio6,
    elementoNavbar1: "Shows",
    elementoNavbar2: "Descripción",
    elementoNavbar3: "Galería",
    elementoNavbar4: "Ubicacion",
    elementoNavbar5: "Contacto",
    tituloInicio: "",
    botonInicio: "SHOWS",
    tituloHistoriaArriba: "YSY A",
    tituloHistoriaAbajo: "",
    imagenHistoria: historia,
    descripcion1:
      "Alejo Nahuel Acosta Migliarini (Buenos Aires, Argentina; 12 de julio de 1998), conocido artísticamente como YSY A, es un rapero, productor, freestyler y diseñador argentino, principalmente del género del trap. Alejo Acosta se hizo conocido en 2015 cuando formó la competencia de rap 'El Quinto Escalón' con apenas 17 años. En 2016 la competición se popularizó de manera desenfrenada, y se volvería la más importante de Sudamérica, además de ser cuna de muchos artistas emergentes de la escena del trap argentino.",
    descripcion2:
      "En 2018, formó parte del trío musical 'Modo Diablo', junto a los raperos Duki y Neo Pistea y el 11 de noviembre de ese mismo año lanzó su álbum de estudio debut, Antezana 247, que tuvo una gran recepción pór parte del público y críticos. El 11 de noviembre de 2019 publicó su segundo álbum de estudio, Hecho a Mano. En 2020 lanzó una serie de sencillos bajo el nombre de #YSYA2020, de los cuales 'Silbando' y 'Un Flow de Infarto' sumaron millones de visitas en YouTube, y sacó su primer EP, Mordiendo El Bozal. El 11 de noviembre de 2021 publicó su tercer álbum de estudio, Trap de Verdad, bajo su propio sello discográfico, Sponsor Dio$. Un año después, en la misma fecha, sacó su cuarto álbum de estudio, YSYSMO, que se convirtió en su disco más exitoso a nivel comercial, teniendo el debut más grande en las listas de éxitos a pesar de no contar con sencillos ni colaboraciones.",
  };

  const [variables, setVariables] = React.useState(variablesGlobales);

  return (
    <VariablesContext.Provider value={{ variables, setVariables }}>
      {props.children}
    </VariablesContext.Provider>
  );
};

export default VariablesProvider;
