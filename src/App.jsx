import React from 'react';
import Section from './components/Section';
import SectionHistoria from './components/SectionHistoria';
import Imagenes from './components/Imagenes';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Route,
    Switch
  
  } from "react-router-dom";
import Navbar from './components/Navbar';
//import BotonFlotante from './components/BotonFlotante';
import Eventos from './components/Eventos';
import DetalleEvento from './components/DetalleEvento';
import VariablesProvider from './context/VariablesProvider';
import TagManager from 'react-gtm-module';

const TagManagerArgs = {
  gtmId: 'GTM-N2N9W5J'
}

TagManager.initialize(TagManagerArgs)



function App() {
  return (
    <>
    <VariablesProvider>

      <Router basename={'/estadio/obras'}> 
      

        <Switch>
          <Route path='/:name' exact >
            <DetalleEvento />            
          </Route>       

          <Route path='/' exact>
            <Navbar/>
            <Section />         
            <Eventos />
            <SectionHistoria />
            <Imagenes />
            <Contacto />
            {/* <BotonFlotante/> */}
            <Footer />
          </Route> 
        
        </Switch>
      </Router>
    </VariablesProvider>
    </>

  
  
  );
}

export default App;
