import React from 'react';
import img from '../../../images/import.jpg';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const ImportExport = () => {
  return (
    <>
      <Navbar />
      <div className='container my-10 mx-auto pt-20'>
        <div>
          <h1 className='font-bold text-red-600 text-4xl text-center'>
            Import <span className='text-primary'>Export</span>
          </h1>
        </div>
        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
          {/* Section image */}
          <div className='w-full md:w-2/4'>
            <img src={img} alt='Opérations' className='rounded-lg shadow-lg' />
          </div>
          {/* Section content */}
          <div className='w-full md:w-2/4 space-y-4'>
            <h3 className='font-semibold text-primary text-lg lg:text-2xl'>
              En tant qu'acteurs clés dans le commerce international, nous facilitons les opérations d'importation et d'exportation. 
              Nous gérons les aspects logistiques, douaniers et réglementaires pour garantir une chaîne d'approvisionnement fluide et conforme.
            </h3>
            <p className='font-semibold text-sm text-red-600 lg:text-base'>
              Que vous soyez un importateur ou un exportateur, nous vous offrons des solutions sur mesure pour optimiser vos opérations et garantir la conformité réglementaire à chaque étape.
            </p>
            {/* Call-to-Action Button */}
            <div className='flex justify-center'>
              <button className='bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-150 ease-linear'>
                Contactez-nous pour vos besoins en import/export
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ImportExport;
