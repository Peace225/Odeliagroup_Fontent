import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero/Hero';
import Vente from '../components/Home/Vente/Vente';
import Mission from '../components/Home/Mission/Mission';
import Nous from '../components/Home/Nous/Nous';
import HouseNews from '../components/Home/News/HouseNews';
import Footer from '../components/Footer';

const Accueil = () => {
  return (
    <>
      {/* Navbar - Navigation du site */}
      <Navbar />
      
      {/* Hero - Section principale avec des visuels accrocheurs */}
      <Hero />
      
      {/* Vente - Section pour les informations liées aux ventes */}
      <Vente />
      
      {/* Nous - Section sur l'entreprise ou l'équipe */}
      <Nous />
      
      {/* Mission - Détails sur la mission de l'entreprise */}
      <Mission />
      
      {/* HouseNews - Actualités et mises à jour liées à l'immobilier */}
      <HouseNews />
      
      {/* Footer - Pied de page */}
      <Footer />
    </>
  );
};

export default Accueil;
