import React from 'react'
import obras5 from '../img/obras5.webp'

const SectionHistoria = () => {
    return (
        <>
          
                <section id="about">
                    <div className="container wow fadeInUp">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-12">
                                <h2 className="section-title">40 AÑOS DE HISTORIA</h2>
                                <div className="section-title-divider"></div>
                                <h4 className="section-title" align="center">del Templo del Rock</h4>
                                </div>
                            </div>
                        </div>
                    </div><br />

                    <div className="container about-container wow fadeInUp">
                        <div className="row">

                            <div className="col-12 col-lg-6 about-img mb-2 mb-lg-0">
                                <img src={obras5} alt="obras el templo del rock" />
                            </div>

                            <div className="col-12 col-lg-6 about-content">
                                <p className="about-text">
                                    El estadio Obras Sanitarias, desde 1978 alberga a más 6.000 bandas y solistas argentinos e internacionales, con una capacidad de 4.700 espectadores. El logro de poder presentarse en el escenario de Obras para los artistas nacionales de cualquier género es sinónimo de consagración, es un antes y un después en la vida artística. Los años han demostrado que hay un sentimiento que con el paso del tiempo se intensifica y que no pierde nunca esa mística.
                                </p>
                            
                                <p className="about-text">
                                
                                    Las huellas de artistas y momentos que marcaron un antes y un después en un lugar emblema para Argentina. Presentaciones en vivo que terminaron siendo historias únicas, una de ellas fue en 1994 durante el show de B.B. King, cuando invitó a Pappo al escenario. Sin ir más lejos, este año Ciro Pertusi volvió a cantar con Attaque 77 y recientemente Ozzy Osbourne se despidió de Latinoamérica con su tour "No More Tours II".
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="section-title-divider mt-4"></div>
                </section>
            
        </>
    )
}

export default SectionHistoria
