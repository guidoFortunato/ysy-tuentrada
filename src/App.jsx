import React from 'react';
import Section from './components/Section';
import SectionHistoria from './components/SectionHistoria';
import Fotos from './components/Fotos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
  
  } from "react-router-dom";
import Navbar from './components/Navbar';
import BotonFlotante from './components/BotonFlotante';
import Eventos from './components/Eventos';
import TagManager from 'react-gtm-module';

const TagManagerArgs = {
  gtmId: 'GTM-N2N9W5J'
}

TagManager.initialize(TagManagerArgs)



function App() {
  return (
    <>
      <Router basename={'/estadio/obras'}>
        <Navbar/>        
        <Section />
        <Eventos />
        <SectionHistoria />
        <Fotos />
        <Contacto />
        <BotonFlotante/>
        <Footer />
      </Router>
    </>

  
  
  );
}

export default App;
