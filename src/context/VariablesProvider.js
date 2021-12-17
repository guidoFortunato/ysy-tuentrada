import React from 'react'
import portfolio1 from '../img/portfolio1.webp'
import portfolio2 from '../img/portfolio2.webp'
import portfolio3 from '../img/portfolio3.webp'
import portfolio4 from '../img/portfolio4.webp'
import portfolio5 from '../img/portfolio5.webp'
import portfolio7 from '../img/portfolio7.webp'
import portfolio8 from '../img/portfolio8.webp'
import portfolio9 from '../img/portfolio9.webp'
// import obras2 from '../img/obras2.webp'
import obras3 from '../img/obras3.webp'
import logo from '../img/logo.png'
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
        portfolioImg3: portfolio3,
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
        descripcion1: 'Teatro Astral Miramar está ubicado en la ciudad de miramar, brindando entretenimiento y actividades artísticas a toda la comunidad. Los mejores espectáculos han participado de esta hermosa sala, ideal para compartir en familia',
        descripcion2: 'Se reinaguró en el año 2011, con una amplia cartelera de funciones teatrales en temporada. Cuenta con capacidad para 600 personas con una excelente acústica , camarines equipados para mas de 10 artistas en escena y un gran personal de trabajo.'
        
    }

    const [variables, setVariables] = React.useState(variablesGlobales)




    return (
        <VariablesContext.Provider value={{variables, setVariables}}>
            {props.children}
        </VariablesContext.Provider>
    )
}

export default VariablesProvider
