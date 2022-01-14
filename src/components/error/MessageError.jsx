import React from 'react'
import './messageError.css'



const MessageError = ({error}) => {
   

    
    return (
        <div className="container">
            <div className="container-alerta alerta-danger" role="alert">
                {
                    error ? <h4 className='text-center'>{`Error ${error.status}: ${error.statusText}`}</h4> : <h4 className='text-center'>No se pudieron cargar los shows, por favor intente mas tarde nuevamente</h4>
                }
            </div>
        </div>
    )
}

export default MessageError
