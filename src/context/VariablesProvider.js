import React from "react";
import portfolio1 from "../img/portfolio1.webp";
import portfolio2 from "../img/portfolio2.webp";
import portfolio3 from "../img/portfolio3.webp";
import portfolio4 from "../img/portfolio4.webp";

import portfolio5 from "../img/portfolio5.webp";

import portfolio6 from "../img/portfolio6.webp";

import logo from "../img/logo.png";

import historia from "../img/historia.webp";
import ntvg381 from "../img/ntvg381.webp";
import bahiablancaNTVG from "../img/bahiablancaNTVG.webp";
import lapampaNTVG from "../img/lapampaNTVG.webp";
import mendozaNTVG from "../img/mendozaNTVG.webp";
import rosarioNTVG from "../img/rosarioNTVG.webp";
import sanjuanNTVG from "../img/sanjuanNTVG.webp";
import tandilNTVG from "../img/tandilNTVG.webp";
import barilocheNTVG from "../img/barilocheNTVG.webp";
import ntvgNeuquen from "../img/ntvgNeuquen.webp";
import ntvgTucuman from "../img/ntvgTucuman.webp";
import ntvgJujuy from "../img/ntvgJujuy.webp";
import ntvgCordoba from "../img/ntvgCordoba.webp";
import ntvgJunin from "../img/ntvgJunin.webp";

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
    venueName: "NTVG",
    tuentradaName: "tuentrada.com",
    linkTuentrada: "https://tuentrada.com",
    linkVenueFb: "https://www.facebook.com/notevagustaroficial",
    linkVenueTw: "https://twitter.com/ntvgoficial",
    linkVenueIg: "https://www.instagram.com/notevagustaroficial/",
    volver: "Volver",
    tituloEventos: "PRÓXIMOS SHOWS",
    tituloImagenes: "NTVG",
    portfolioImg1: portfolio1,
    portfolioImg2: portfolio2,
    portfolioImg3: portfolio3,
    portfolioImg4: portfolio4,
    portfolioImg5: portfolio5,
    portfolioImg6: portfolio6,
    imgEventos: ntvg381,
    ntvgPampa: lapampaNTVG,
    ntvgBahia: bahiablancaNTVG,
    ntvgSanjuan: sanjuanNTVG,
    ntvgMendoza: mendozaNTVG,
    ntvgTandil: tandilNTVG,
    ntvg381: ntvg381,
    //ntvgCordoba: cordobaNTVG,
    ntvgRosario: rosarioNTVG,
    ntvgBariloche: barilocheNTVG,
    ntvgNeuquen: ntvgNeuquen,
    ntvgCordoba: ntvgCordoba,
    ntvgJujuy: ntvgJujuy,
    ntvgJunin: ntvgJunin,
    ntvgTucuman: ntvgTucuman,
    elementoNavbar1: "Shows",
    elementoNavbar2: "Luz",
    elementoNavbar3: "NTVG",
    elementoNavbar4: "Ubicacion",
    tituloInicio: "",
    botonInicio: "SHOWS",
    tituloHistoriaArriba: "LUZ",
    tituloHistoriaAbajo: "",
    imagenHistoria: historia,
    descripcion1:
      "Luz, el décimo disco de estudio de No Te Va Gustar, contiene todo eso incluso cuando en su línea de tiempo aparezca como lo nuevo después de la recapitulación (un disco de reversiones de su propia obra y un libro de memorias colectivo, ambos en 2019 y con motivo de los 25 años de historia del grupo). Emiliano Brancciari y compañía dan forma (son ante todo formalistas puros) a 12 canciones inscriptas en la tradición (rock y rioplatense, desde Calamaro y Os Paralamas hasta Fernando Cabrera). Incluso las colaboraciones muestran lo hospitalarias que son las formas de NTVG: Nicki Nicole en la super explicitada “Venganza” y Ricardo Mollo en la tecnoevocativa “Austro” marcan el espectro generacional que pueden abarcar.",
    descripcion2:
      "Desde lo plenamente sonoro, el pulso de rock que predomina en el disco se hace más evidente en las guitarras machacantes que sostienen las melodías (con estirpe punk californiano en “La Rama” y con el swing ricotero en “Dejo atrás”). Sumado a que los vientos aparecen ubicados como apoyo en partes puntuales, No Te va Gustar suena como cantautor expandido. Todos los recursos tímbricos juegan en función de lo mismo: conducir las melodías de alto contenido estribillero de Brancciari. Y en el juego de intensidades, las canciones tienen la elasticidad necesarias para proyectarse en una habitación o en un estadio. Luz no defrauda en eso.",
  };

  const [variables, setVariables] = React.useState(variablesGlobales);

  return (
    <VariablesContext.Provider value={{ variables, setVariables }}>
      {props.children}
    </VariablesContext.Provider>
  );
};

export default VariablesProvider;
