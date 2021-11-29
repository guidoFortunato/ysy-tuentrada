import React from 'react'

const Contacto = () => {
    return (
        <>
           
                <section id="contact">
                        <div className="container wow fadeInUp">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="section-title">Ubicación</h3>
                                    <div className="section-title-divider"></div>
                                    
                                </div>
                            </div>

                            <div className="row justify-content-center">
                            
                                <div className="info" align="center">
                                    <div>
                                    
                                    
                                        
                                        <iframe 
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.341801732421!2d-58.46014958468972!3d-34.544900261895556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb426ba8c1e9b%3A0x45305aa2ca115efa!2sEstadio%20Obras%20Sanitarias!5e0!3m2!1ses!2sar!4v1617032475813!5m2!1ses!2sar" 
                                            frameBorder="0" 
                                            allowFullScreen
                                            title='mapa obras'
                                            className='iframe'
                                            >
                                        </iframe>                
                                    
                                        <div className="logos">
                                            
                                                <i className="bi bi-geo-alt-fill"></i> 
                                                <div className='ms-3'>Av. del Libertador 7395 - CABA</div>
                                                

                                        </div>
                                            <div className='logos logo-consultas'>
                                                <i className="bi bi-envelope-fill"></i>
                                                <div className='ms-3'><a className='consultas' href="mailto:consultas@foh-sa.com">consultas@foh-sa.com</a></div>

                                            
                                            </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        
                </section>
        </>
    )
}

export default Contacto
