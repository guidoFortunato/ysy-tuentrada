import React from 'react'
import {VariablesContext} from '../context/VariablesProvider'

const Section = () => {

    const {variables} = React.useContext(VariablesContext)
    return (
        <>
            <section id="hero">
                <div className="hero-container">
                <div className="wow fadeIn">
                    <div className="hero-logo">
                    <img src={variables.logo} alt={variables.altLogo} />
                    </div>

                    <h1>{variables.tituloInicio}</h1>
                    
                    <div className="actions" align="center">
                    <a href="#team" className="btn-get-started">{variables.botonInicio}</a>
                    </div>
                
                </div>
                </div>
            </section>
        </>
    )
}

export default Section
