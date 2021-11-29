import React from 'react'
import portfolio1 from '../img/portfolio1.webp'
import portfolio2 from '../img/portfolio2.webp'
import portfolio3 from '../img/portfolio3.webp'
import portfolio4 from '../img/portfolio4.webp'
import portfolio5 from '../img/portfolio5.webp'
import portfolio6 from '../img/portfolio6.webp'
import portfolio7 from '../img/portfolio7.webp'
import portfolio8 from '../img/portfolio8.webp'
import portfolio9 from '../img/portfolio9.webp'

const Fotos = () => {
    return (
        <>
          
            <section id="portfolio">
                <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-12">
                                <h3 className="section-title">Viví Obras</h3>
                                <div className="section-title-divider"></div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row portfolio-container">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <img src={portfolio1} className="img-fluid" alt="obras" />
                            
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src={portfolio2} className="img-fluid" alt="obras" />
                            
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src={portfolio3} className="img-fluid" alt="obras" />
                            
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src={portfolio4} className="img-fluid" alt="obras" />
                            
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src={portfolio5} className="img-fluid" alt="obras" />
                            
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src={portfolio6} className="img-fluid" alt="obras" />
                            
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src={portfolio7} className="img-fluid" alt="obras" />
                            
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src={portfolio8} className="img-fluid" alt="obras" />
                            
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <img src={portfolio9} className="img-fluid" alt="obras" />
                            
                        </div>    

                    </div>

                </div>
            </section>
        </>
    )
}

export default Fotos
