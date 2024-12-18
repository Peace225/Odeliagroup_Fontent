import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Composants avec React.lazy pour un chargement dynamique
const Accueil = lazy(() => import('./pages/Accueil'));
const Apropos = lazy(() => import('./pages/Apropos'));
const NosOffres = lazy(() => import('./pages/NosOffres'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Composants Services avec React.lazy
const Foncier = lazy(() => import('./components/Home/Services/Foncier'));
const ImportExport = lazy(() => import('./components/Home/Services/ImportExport'));
const Contentieux = lazy(() => import('./components/Home/Services/Contentieux'));
const RechercheDeFinancement = lazy(() => import('./components/Home/Services/RechercheDeFinancement'));
const Negoce = lazy(() => import('./components/Home/Services/Negoce'));
const GestionImmobilier = lazy(() => import('./components/Home/Services/GestionImmobilier'));
const RepresentationCommercial = lazy(() => import('./components/Home/Services/RepresentationCommercial'));

// Application principale
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/nosoffres" element={<NosOffres />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/foncier" element={<Foncier />} />
            <Route path="/services/importexport" element={<ImportExport />} />
            <Route path="/services/contentieux" element={<Contentieux />} />
            <Route path="/services/recherche-financement" element={<RechercheDeFinancement />} />
            <Route path="/services/negoce" element={<Negoce />} />
            <Route path="/services/gestion-immobilier" element={<GestionImmobilier />} />
            <Route path="/services/representation-commercial" element={<RepresentationCommercial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
