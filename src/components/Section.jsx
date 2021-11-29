import React from 'react'
import logo from '../img/logo.png'

const Section = () => {
    return (
        <>
            <section id="hero">
                <div className="hero-container">
                <div className="wow fadeIn">
                    <div className="hero-logo">
                    <img src={logo} alt="logo obras" />
                    </div>

                    <h1>Bienvenidos al Templo del ROCK</h1>
                    
                    <div className="actions" align="center">
                    <a href="#team" className="btn-get-started">SHOWS</a>
                    </div>
                
                </div>
                </div>
            </section>
        </>
    )
}

export default Section
