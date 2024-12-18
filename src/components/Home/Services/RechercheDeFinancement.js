import React from 'react';
import img from '../../../images/financement.jpg';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const RechercheDeFinancement = () => {
  return (
    <>
        <Navbar/>
        <div className='container my-10 mx-auto pt-20'>
            <div>
                <h1 className='font-bold text-red-600 text-4xl text-center'>Recherche de <span className='text-primary'>Financement</span> </h1>
            </div>
            <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
                {/* section img */}
                <div className='w-full md:w-2/4'>
                    <img src={img} alt='Financement' className='rounded-lg' />
                </div>
                {/* section content */}
                <div className='w-full md:w-2/4 space-y-4'>
                    <h3 className='font-semibold text-primary text-lg lg:text-2xl'>
                        Nous soutenons les entreprises et projets dans leur quête de financement. Que ce soit pour des investissements, des expansions ou des projets spécifiques, notre expertise en recherche de financement nous permet de connecter nos clients avec les sources de financement les plus adaptées à leurs besoins.
                    </h3>
                    {/* Call-to-Action Button */}
            <div className='flex justify-center'>
              <button className='bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-150 ease-linear'>
                Contactez-nous pour vos besoins financiers
              </button>
            </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default RechercheDeFinancement;
