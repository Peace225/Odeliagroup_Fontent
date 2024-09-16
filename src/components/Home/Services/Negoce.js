import React from 'react';
import img from '../../../images/négoce .jpg';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const Negoce = () => {
  return (
    <>
        <Navbar/>
        <div className='container my-10 mx-auto pt-20'>
            <div>
                <h1 className='font-bold text-red-600 text-4xl text-center'>Negoce de <span className='text-primary'>Matière Première</span> </h1>
            </div>
            <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
                {/* section img */}
                <div className='w-full md:w-2/4'>
                    <img src={img} alt='img' className='rounded-lg' />
                </div>
                {/* section content */}
                <div className='w-full md:w-2/4 space-y-4'>
                    <h3 className='font-semibold text-primary text-lg lg:text-2xl'>Nous sommes spécialisés dans le négoce de matières premières, offrant à nos clients des solutions sur mesure pour leurs besoins en ressources naturelles. Grâce à notre réseau mondial et à notre expertise sectorielle, nous garantissons des produits de haute qualité à des conditions avantageuses.</h3>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Negoce