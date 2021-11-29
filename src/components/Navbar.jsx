import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import { Link } from "react-scroll";
import logo from '../img/logo.png'

const Navbar = () => {

    
    const [navbarBack, setNavbarBack] = React.useState(false)

    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 130) {
            setNavbarBack(true)
        }else{
            setNavbarBack(false)
        }
    })

    
  
    return (
        <Router>

           

            {/* <nav className={scrollNav > 0 ? "navbar navbar-expand-lg navbar-dark bg-dark fixed-top" : "navbar navbar-expand-lg navbar-dark fixed-top"}> */}
            <nav data-toggle="collapse" className={navbarBack ? "navbar navbar-expand-lg navbar-dark navbar-active fixed-top" : "navbar navbar-expand-lg navbar-dark fixed-top"}>
                <div className="container">
                    <img src={logo} style={{width: '125px', height: '40px'}}alt="logo obras" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link 
                            className="nav-link cursor w-25 w-md-0" 
                            aria-current="page" 
                            activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                        >
                                Shows
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            
                            className="nav-link cursor w-25 w-md-0" 
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                        >
                            Historia</Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            
                            className="nav-link cursor w-25 w-md-0"  
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                        >Obras</Link>
                        </li>
                        <li className="nav-item">
                        <Link
                             
                            className="nav-link cursor w-25 w-md-0" 
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                        >Ubicación</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            
        </Router>
    )
}

export default Navbar
