import React from 'react'
import { animateScroll as scroll } from "react-scroll";

const BotonFlotante = () => {

    const [ocultarBoton, setOcultarBoton] = React.useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 130) {
            setOcultarBoton(true)
        } else {
            setOcultarBoton(false)
        }
    })

    // Desplamiento hasta el borde superior de la página
    const onClickUp = () => {
        scroll.scrollToTop();
    }
    return (
        <div className={
            ocultarBoton ? 'contenedor' : 'contenedor ocultar-boton'
        }>
            
            <div>
                <button
                    onClick={() => onClickUp()}
                    className='boton-arriba'
                >
                    <i className="bi bi-arrow-up"></i>
                </button>
                
            </div>
        </div>
    )
}

export default BotonFlotante
