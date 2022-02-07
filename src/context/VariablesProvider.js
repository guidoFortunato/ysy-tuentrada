import React from 'react'
import portfolio1 from '../img/portfolio1.webp'
import portfolio2 from '../img/portfolio2.webp'
import portfolio3 from '../img/portfolio3.webp'
import portfolio4 from '../img/portfolio4.webp'
import portfolio5 from '../img/portfolio5.webp'
import portfolio6 from '../img/portfolio6.webp'


import logo from '../img/logo.png'

import historia from '../img/historia.webp'
import ntvg381 from '../img/ntvg381.webp'


export const VariablesContext = React.createContext()

const VariablesProvider = (props) => {


    const variablesGlobales = {
        iframeUbicacion: '',
        tituloUbicacion: 'Ubicación',
        direccion: '',
        mailTo: '',
        mail: '',
        iframeAlt: '',
        logo: logo,        
        altLogo: "logo tuentrada",
        venueName: 'NTVG',
        tuentradaName: 'tuentrada.com',
        linkTuentrada: "https://tuentrada.com",
        linkVenueFb: "https://www.facebook.com/notevagustaroficial",
        linkVenueTw: "https://twitter.com/ntvgoficial",
        linkVenueIg: "https://www.instagram.com/notevagustaroficial/",
        volver: 'Volver',
        tituloEventos: 'PRÓXIMOS SHOWS',
        tituloImagenes: 'NTVG',
        portfolioImg1: portfolio1,
        portfolioImg2: portfolio2,
        portfolioImg3: portfolio3,
        portfolioImg4: portfolio4,
        portfolioImg5: portfolio5,
        portfolioImg6: portfolio6,
        imgEventos: ntvg381,
        elementoNavbar1: 'Shows',
        elementoNavbar2: 'Historia',
        elementoNavbar3: 'NTVG',
        elementoNavbar4: 'Ubicacion',
        tituloInicio: '',
        botonInicio: 'SHOWS',
        tituloHistoriaArriba: '',
        tituloHistoriaAbajo: '',
        imagenHistoria: historia,
        descripcion1: 'No Te Va Gustar (popularmente abreviada y estilizada como NTVG) es una banda uruguaya de rock formada el 25 de junio de 1994 en Montevideo. Está integrada por Emiliano Brancciari (voz y guitarra), Guzmán Silveira (bajo y coros), Diego Bartaburu (batería), Martín Gil (trompeta y coros), Denis Ramos (trombón y coros), Mauricio Ortiz (saxofón barítono y tenor), Pablo Coniberti (guitarra y coros) y Francisco Nasser (teclados,coros y guitarra).',
        descripcion2: 'A la hora de hacer la primera presentación en un festival, la banda todavía no tenía un nombre. Emiliano y Mateo pensaron un nombre que, según cuentan, era muy malo (y por cábala nunca contaron cuál era). Cuando le fueron a contar a Pablo (el batero), le dijeron textualmente "Tenemos el nombre [...] no te va a gustar", a lo que este respondió "¡Está buenísimo!". Se dieron cuenta, entonces, que era mucho mejor que el que habían pensado y lo propusieron definitivamente'
        
    }

    const [variables, setVariables] = React.useState(variablesGlobales)




    return (
        <VariablesContext.Provider value={{variables, setVariables}}>
            {props.children}
        </VariablesContext.Provider>
    )
}

export default VariablesProvider
