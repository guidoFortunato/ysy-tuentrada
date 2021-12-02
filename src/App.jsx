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
import Error404 from './components/auth/Error404';

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

          <Route path='/:name' exact >
            <DetalleEvento />            
          </Route>       


          <Route path='*' component={Error404} />
        
        </Switch>
      </Router>
    </VariablesProvider>
    </>

  
  
  );
}

export default App;
