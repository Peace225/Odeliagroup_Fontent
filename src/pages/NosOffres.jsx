import React, { lazy, Suspense } from 'react';

// Chargement paresseux des composants
const Navbar = lazy(() => import('../components/Navbar'));
const Offres = lazy(() => import('../components/Offres/Offres'));
const Footer = lazy(() => import('../components/Footer'));

const NosOffres = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      {/* Affichage de la barre de navigation */}
      <Navbar />
      
      {/* Affichage de la section des offres */}
      <Offres />
      
      {/* Affichage du pied de page */}
      <Footer />
    </Suspense>
  );
};

export default NosOffres;
