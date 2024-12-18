import React from 'react';
import img from '../../../images/négoce .jpg';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const Negoce = () => {
  return (
    <>
      <Navbar />
      <div className='container my-10 mx-auto pt-20'>
        <div>
          <h1 className='font-bold text-red-600 text-4xl text-center'>
            Negoce de <span className='text-primary'>Matière Première</span>
          </h1>
        </div>
        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
          {/* Section image */}
          <div className='w-full md:w-2/4'>
            <img 
              src={img} 
              alt='Negoce de matières premières avec des produits de haute qualité' 
              className='rounded-lg shadow-lg'
            />
          </div>
          {/* Section content */}
          <div className='w-full md:w-2/4 space-y-4'>
            <h3 className='font-semibold text-primary text-lg lg:text-2xl'>
              Nous sommes spécialisés dans le négoce de matières premières, offrant à nos clients des solutions sur mesure pour leurs besoins en ressources naturelles. Grâce à notre réseau mondial et à notre expertise sectorielle, nous garantissons des produits de haute qualité à des conditions avantageuses.
            </h3>
            <p className='font-semibold text-sm text-red-600 lg:text-base'>
              Nous traitons une large gamme de matières premières, notamment des métaux, des minéraux, des produits agricoles, et plus encore, adaptés à divers secteurs industriels.
            </p>
            {/* Call-to-Action Button */}
            <div className='flex justify-center'>
              <button className='bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-150 ease-linear'>
                Contactez-nous pour vos besoins en négoce de matières premières
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Negoce;
