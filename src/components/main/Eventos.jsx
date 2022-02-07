import React, { useState } from 'react'
import { VariablesContext } from '../../context/VariablesProvider'
// import MessageError from '../error/MessageError';
// import ListaEventos from './ListaEventos/ListaEventos';
// import Loader from './Loader/Loader';




const Eventos = (props) => {

    // const [eventos, setEventos] = useState([])
    // const [error, setError] = useState(null)
    // const [loading, setLoading] = useState(false);
    const {variables} = React.useContext(VariablesContext)



    // React.useEffect(()=>{
    //     setLoading(true)

    //     const getData = async ()=>{
    //         const url = 'https://api.tuentrada.com/api/venue?venue=astral'
    //         const token = '3|ruU31fAttxU0FKWmvV8pdB1GCyhQa7lNAQwBfEVb'

    //         try {
    //             const res = await fetch(url, {

    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${token}`
    //                 }
        
    //             })
                
                
    //             // eslint-disable-next-line no-throw-literal
    //             if (!res.ok) throw {
    //                 err: true,
    //                 status: res.status || "00", 
    //                 statusText: res.statusText || "Error al intentar acceder al servidor"
    //             }

               
    //             const data = await res.json()

    //              /*
    //             no funciona el manejo de error
               
    //             if (!res.ok) throw {
    //                 err: true,
    //                 status: res.status || "00", 
    //                 statusText: res.statusText || "Ocurrió un error"
    //             }
    //             */

                
                
    //             setEventos(data)
                
    //         } catch (err) {
    //             console.log('error',err)
    //             if (err) {
    //                 setError(err)
    //             }    
    //         }
            

           
    //         setLoading(false)
    //     }
        
    //     getData()
    // }, [])


    return  (
        
            <main id="main">
                <section id="team">
                    <div className="container wow fadeInUp">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="section-title">{variables.tituloEventos}</h3>
                                <div className="section-title-divider"></div>                          
                            
                        

                            </div>
                        </div>

                        <div className="row">

                            

                         
                            
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2" >
                            <div className="card">                                            
                                <img src={variables.imgEventos} className="card-img-top" alt='ntvg' />
                                <div className="card-body">                                                
                                    <h6 className='card-title'>NTVG</h6>
            
                                    <div className="fecha-hora">
                                        <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Fecha:</span>
                                        <span className='ms-1'>06-04-22</span>
                                    </div>
            
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Hora:</span>
                                        <span className='ms-1'>21:00 hs</span>
                                    </div>
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Lugar: </span>
                                        <span className='ms-1'>Rosario</span>
                                    </div>
                                    
                                    <a
                                        className="btn btn-primary btn-color mt-4"
                                        rel="noreferrer"
                                        target='_blank'
                                        href='https://www.tuentrada.com/eventos/detalle/NTVG/992519794712'
                                        
                                    >
                                        Comprar
                                    </a>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2" >
                            <div className="card">                                            
                                <img src={variables.imgEventos} className="card-img-top" alt='ntvg' />
                                <div className="card-body">                                                
                                    <h6 className='card-title'>NTVG</h6>
            
                                    <div className="fecha-hora">
                                        <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Fecha:</span>
                                        <span className='ms-1'>09-04-22</span>
                                    </div>
            
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Hora:</span>
                                        <span className='ms-1'>19:00 hs</span>
                                    </div>
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Lugar: </span>
                                        <span className='ms-1'>Mendoza</span>
                                    </div>
                                    
                                    <a
                                        className="btn btn-primary btn-color mt-4"
                                        rel="noreferrer"
                                        target='_blank'
                                        href='https://www.tuentrada.com/eventos/detalle/NTVG/667614595308'
                                        
                                    >
                                        Comprar
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2" >
                            <div className="card">                                            
                                <img src={variables.imgEventos} className="card-img-top" alt='ntvg' />
                                <div className="card-body">                                                
                                    <h6 className='card-title'>NTVG</h6>
            
                                    <div className="fecha-hora">
                                        <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Fecha:</span>
                                        <span className='ms-1'>10-04-22</span>
                                    </div>
            
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Hora:</span>
                                        <span className='ms-1'>22:00 hs</span>
                                    </div>
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Lugar: </span>
                                        <span className='ms-1'>San Juan</span>
                                    </div>
                                    
                                    <a
                                        className="btn btn-primary btn-color mt-4"
                                        rel="noreferrer"
                                        target='_blank'
                                        href='https://www.tuentrada.com/eventos/detalle/NTVG/236818741784'
                                        
                                    >
                                        Comprar
                                    </a>
                                    
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2" >
                            <div className="card">                                            
                                <img src={variables.imgEventos} className="card-img-top" alt='ntvg' />
                                <div className="card-body">                                                
                                    <h6 className='card-title'>NTVG</h6>
            
                                    <div className="fecha-hora">
                                        <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Fecha:</span>
                                        <span className='ms-1'>12-04-22</span>
                                    </div>
            
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Hora:</span>
                                        <span className='ms-1'>21:00 hs</span>
                                    </div>
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Lugar: </span>
                                        <span className='ms-1'>La Pampa</span>
                                    </div>
                                    
                                    <a
                                        className="btn btn-primary btn-color mt-4"
                                        rel="noreferrer"
                                        target='_blank'
                                        href='https://www.tuentrada.com/eventos/detalle/NTVG/122181425407'
                                        
                                    >
                                        Comprar
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2" >
                            <div className="card">                                            
                                <img src={variables.imgEventos} className="card-img-top" alt='ntvg' />
                                <div className="card-body">                                                
                                    <h6 className='card-title'>NTVG</h6>
            
                                    <div className="fecha-hora">
                                        <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Fecha:</span>
                                        <span className='ms-1'>14-04-22</span>
                                    </div>
            
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Hora:</span>
                                        <span className='ms-1'>21:00 hs</span>
                                    </div>
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Lugar: </span>
                                        <span className='ms-1'>Bahía Blanca</span>
                                    </div>
                                    
                                    <a
                                        className="btn btn-primary btn-color mt-4"
                                        rel="noreferrer"
                                        target='_blank'
                                        href='https://www.tuentrada.com/eventos/detalle/NTVG/572188614030'
                                        
                                    >
                                        Comprar
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2" >
                            <div className="card">                                            
                                <img src={variables.imgEventos} className="card-img-top" alt='ntvg' />
                                <div className="card-body">                                                
                                    <h6 className='card-title'>NTVG</h6>
            
                                    <div className="fecha-hora">
                                        <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Fecha:</span>
                                        <span className='ms-1'>24-04-22</span>
                                    </div>
            
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Hora:</span>
                                        <span className='ms-1'>21:00 hs</span>
                                    </div>
                                    <div className="fecha-hora mt-1">
                                        <i className="bi bi-clock-fill color-icono me-2"></i>
                                        <span className='fecha-hora__color-texto'>Lugar: </span>
                                        <span className='ms-1'>Tandil</span>
                                    </div>
                                    
                                    <a
                                        className="btn btn-primary btn-color mt-4"
                                        rel="noreferrer"
                                        target='_blank'
                                        href='https://www.tuentrada.com/eventos/detalle/NTVG/203588539953'
                                        
                                    >
                                        Comprar
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                       
                            
                            
                            
                            
                        </div>
                    </div>
                </section>

            </main>
        
    ) 
    
}

export default Eventos
