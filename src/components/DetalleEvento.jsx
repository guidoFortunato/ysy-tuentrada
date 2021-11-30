import React from 'react'
import { withRouter } from 'react-router'
import { useParams } from "react-router-dom"
import {VariablesContext} from '../context/VariablesProvider'

const DetalleEvento = (props) => {

    const [eventos, setEventos] = React.useState([])

    const {variables} = React.useContext(VariablesContext)

    const {name} = useParams()
    console.log(name)

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
                console.log(res)
                
                setEventos(res)


            } catch (error) {
                console.log(error)
            }

        }
        
        getData()
    }, [])




    return (
        <>

            <nav  className="navbar navbar-expand-lg navbar-dark navbar-active sticky-top">
                <div className="container">
                    <img src={variables.logo} style={{width: '125px', height: '40px'}}alt={variables.altLogo} />
                    
                    
                    <button 
                        className="btn btn-dark ms-auto"
                        onClick={()=>props.history.push('/')}
                    >
                        {variables.volver}
                    </button>
                    
                </div>
            </nav>

        
            <div className="container mt-2 text-center">
                <div className="row">
                    <div className="col-12 col-md-6">
                        Evento
                    </div>
                    <div className="col-12 col-md-6">
                        Evento
                    </div>
                </div>
            </div>
        
        
        <footer id="footer" className='fixed-bottom'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="credits">
                            {variables.venueName} 
                            <a 
                            href={variables.linkTuentrada} 
                            target="_blank"
                            rel="noreferrer"
                            className='ms-1'
                            >
                                {variables.tuentradaName}
                            </a>
                        </p>
                        <div className="text-center">
                            <a href={variables.linkVenueFb} target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-facebook m"></i></a>
                            <a href={variables.linkVenueTw} target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-twitter"></i></a>
                            <a href={variables.linkVenueIg} target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-instagram"></i></a>
                        </div>
                    
                    
                    </div>  

                </div>
            </div>
        </footer>
    </>
    )
}

export default withRouter(DetalleEvento)
