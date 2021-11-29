import React from 'react'
//import { withRouter } from 'react-router'
import { Link } from "react-router-dom";
import {VariablesContext} from '../context/VariablesProvider'


const Eventos = (props) => {

    const [eventos, setEventos] = React.useState([])
    const {variables} = React.useContext(VariablesContext)
    //const [ids, setIds] = React.useState([])



    React.useEffect(()=>{

        const getData = async ()=>{
            const url = 'https://api.tuentrada.com/api/venue?venue=obras'
            

            try {
                const data = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 3|ruU31fAttxU0FKWmvV8pdB1GCyhQa7lNAQwBfEVb'
                    }
                    
                    
                })
                const res = await data.json()
                // console.log(res[0])
                // console.log(res[0].title)
                setEventos(res)

                // for (let i = 0; i < eventos.length; i++) {
                //     console.log(i)
                    
                // }
                // eventos.map(item=>(
                //     ids.push(item.id)
                // ))


            } catch (error) {
                console.log(error)
            }

        }
        
        getData()
    }, [])

    // const rellenarIds = ()=>{
    //     for (let i = 0; i < eventos.length; i++) {
    //         console.log(eventos[i].id.length)
            
               
            
                                
    //     }

    // }
    // rellenarIds()

    return (
        
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


                            {
                                eventos.map( (item, index)=>(
                                    
                                        
                                    
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2 zoom" key={item.id}>
                                        <div className="card">                                            
                                            <img src={`https://tuentrada.com/${item.image}`} className="card-img-top" alt={item.title} />
                                            <div className="card-body">                                                
                                                <h6 className={'card-title'}>{item.title}</h6>

                                                <div className="fecha-hora">
                                                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                                                    <span className='fecha-hora__color-texto'>Fecha:</span>
                                                    <span className='ms-1'>{item.date}</span>
                                                </div>

                                                <div className="fecha-hora mt-1">
                                                    <i className="bi bi-clock-fill color-icono me-2"></i>
                                                    <span className='fecha-hora__color-texto'>Hora:</span>
                                                    <span className='ms-1'>{item.time} hs</span>
                                                </div>
                                                <Link
                                                    to={`/${item.title}`}
                                                    className="btn btn-color text-white btn-md mt-3"
                                                    
                                                >
                                                    Comprar
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                              
                            
                            
                            
                            
                        </div>
                    </div>
                </section>

            </main>
        
    )
}

export default Eventos
