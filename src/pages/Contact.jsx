import React, { lazy, Suspense } from 'react';

// Chargement paresseux des composants
const Navbar = lazy(() => import('../components/Navbar'));
const ContactUs = lazy(() => import('../components/Contact/ContactUs'));

const Contact = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      {/* Affichage de la barre de navigation */}
      <Navbar />
      
      {/* Section de contact */}
      <ContactUs />
    </Suspense>
  );
};

export default Contact;
