import React, { lazy, Suspense } from 'react';

// Chargement paresseux des composants
const Navbar = lazy(() => import('../components/Navbar'));
const NosServices = lazy(() => import('../components/Home/Services/NosServices'));
const Footer = lazy(() => import('../components/Footer'));

const Services = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      {/* Affichage de la barre de navigation */}
      <Navbar />
      
      {/* Affichage de la section des services */}
      <NosServices />
      
      {/* Affichage du pied de page */}
      <Footer />
    </Suspense>
  );
};

export default Services;
