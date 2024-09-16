import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import NosOffres from './pages/NosOffres';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Foncier from './components/Home/Services/Foncier';
import ImportExport from './components/Home/Services/ImportExport';
import Contentieux from './components/Home/Services/Contentieux';
import RechercheDeFinancement from './components/Home/Services/RechercheDeFinancement';
import Negoce from './components/Home/Services/Negoce';
import GestionImmobilier from './components/Home/Services/GestionImmobilier';
import RepresentationCommercial from './components/Home/Services/RepresentationCommercial';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil/>} />
          <Route path='/apropos' element={ <Apropos/>} />
          <Route path='/nosoffres' element={<NosOffres/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/services/foncier' element={<Foncier/>} /> 
          <Route path='/services/importexport' element={<ImportExport/>} />
          <Route path='/services/contentieux' element={<Contentieux/>} />
          <Route path='/services/recherche-financement' element={<RechercheDeFinancement/>} />
          <Route path='/services/Negoce' element={<Negoce/>} />
          <Route path='/services/gestion-immobilier' element={<GestionImmobilier/>} />
          <Route path='/services/representation-commercial' element={<RepresentationCommercial/>} />
          
          
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App