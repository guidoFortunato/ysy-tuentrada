import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="credits">
                                Estadio Obras 
                                <a 
                                href="https://tuentrada.com" 
                                target="_blank"
                                rel="noreferrer"
                                className='ms-1'
                                >
                                    tuentrada.com
                                </a>
                            </p>
                            <div className="text-center">
                                <a href="https://www.facebook.com/EstadioObras" target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-facebook m"></i></a>
                                <a href="https://twitter.com/EstadioObras" target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-twitter"></i></a>
                                <a href="https://www.instagram.com/estadioobras/" target='_blank' rel="noreferrer" className='me-2'><i className="bi bi-instagram"></i></a>
                            </div>
                            
                            
                        </div>

                    </div>
                </div>
            </footer>            
        </>
    )
}

export default Footer
