import React from 'react'
import portfolio1 from '../img/portfolio1.webp'
import portfolio2 from '../img/portfolio2.webp'
import portfolio4 from '../img/portfolio4.webp'
import portfolio5 from '../img/portfolio5.webp'
import portfolio7 from '../img/portfolio7.webp'
import portfolio8 from '../img/portfolio8.webp'
import portfolio9 from '../img/portfolio9.webp'
import obras2 from '../img/obras2.webp'
import obras3 from '../img/obras3.webp'
import logo from '../img/logo.webp'
import obras5 from '../img/obras5.webp'

export const VariablesContext = React.createContext()

const VariablesProvider = (props) => {


    const variablesGlobales = {
        iframeUbicacion: 'https://maps.google.com/maps?q=21%20N%C2%B01510,%20miramar&t=&z=13&ie=UTF8&iwloc=&output=embed',
        tituloUbicacion: 'Ubicación',
        direccion: 'calle 21 N°1510 - Miramar',
        mailTo: 'mailto:consultas@foh-sa.com',
        mail: 'consultas@foh-sa.com',
        iframeAlt: 'mapa ASTRAL',
        logo: logo,
        altLogo: "logo astral",
        venueName: 'Teatro Astral',
        tuentradaName: 'tuentrada.com',
        linkTuentrada: "https://tuentrada.com",
        linkVenueFb: "https://www.facebook.com/teatroastral100",
        linkVenueTw: "",
        linkVenueIg: "https://www.instagram.com/teatroastralmiramar/",
        volver: 'Volver',
        tituloEventos: 'PRÓXIMOS SHOWS',
        tituloImagenes: 'VIVÍ ASTRAL MIRAMAR',
        portfolioImg1: portfolio1,
        portfolioImg2: portfolio2,
        portfolioImg3: obras2,
        portfolioImg4: portfolio4,
        portfolioImg5: portfolio5,
        portfolioImg6: obras3,
        portfolioImg7: portfolio7,
        portfolioImg8: portfolio8,
        portfolioImg9: portfolio9,
        elementoNavbar1: 'Shows',
        elementoNavbar2: 'Historia',
        elementoNavbar3: 'Astral',
        elementoNavbar4: 'Ubicacion',
        tituloInicio: 'Bienvenidos al Teatro Astral Miramar',
        botonInicio: 'SHOWS',
        tituloHistoriaArriba: '',
        tituloHistoriaAbajo: '',
        imagenHistoria: obras5,
        descripcion1: 'El estadio Obras Sanitarias, desde 1978 alberga a más 6.000 bandas y solistas argentinos e internacionales, con una capacidad de 4.700 espectadores. El logro de poder presentarse en el escenario de Obras para los artistas nacionales de cualquier género es sinónimo de consagración, es un antes y un después en la vida artística. Los años han demostrado que hay un sentimiento que con el paso del tiempo se intensifica y que no pierde nunca esa mística.',
        descripcion2: 'Las huellas de artistas y momentos que marcaron un antes y un después en un lugar emblema para Argentina. Presentaciones en vivo que terminaron siendo historias únicas, una de ellas fue en 1994 durante el show de B.B. King, cuando invitó a Pappo al escenario. Sin ir más lejos, este año Ciro Pertusi volvió a cantar con Attaque 77 y recientemente Ozzy Osbourne se despidió de Latinoamérica con su tour "No More Tours II".'
        
    }

    const [variables, setVariables] = React.useState(variablesGlobales)




    return (
        <VariablesContext.Provider value={{variables, setVariables}}>
            {props.children}
        </VariablesContext.Provider>
    )
}

export default VariablesProvider
