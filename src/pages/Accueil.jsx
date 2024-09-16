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
    <Navbar/>
    <Hero/>
    <Vente/>
    <Nous/>
    <Mission/>
    <HouseNews/>
    <Footer/>
    </>
  )
}

export default Accueil