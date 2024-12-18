import React from 'react';
import Navbar from '../components/Navbar';   // Importation de la barre de navigation
import AproposUs from '../components/Apropos/AproposUs';   // Section sur "À propos de nous"
import Approch from '../components/Apropos/Approch';   // Section expliquant l'approche de l'entreprise
import Footer from '../components/Footer';   // Importation du pied de page

const Apropos = () => {
  return (
    <>
      {/* Affichage de la barre de navigation */}
      <Navbar />
      
      {/* Section "À propos de nous" */}
      <AproposUs />
      
      {/* Section "Notre approche" */}
      <Approch />
      
      {/* Affichage du pied de page */}
      <Footer />
    </>
  );
};

export default Apropos;
