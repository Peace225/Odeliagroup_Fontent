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
                <h1 className='font-bold text-red-600 text-4xl text-center'>Recherce de <span className='text-primary'>Financement</span> </h1>
            </div>
            <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
                {/* section img */}
                <div className='w-full md:w-2/4'>
                    <img src={img} alt='img' className='rounded-lg' />
                </div>
                {/* section content */}
                <div className='w-full md:w-2/4 space-y-4'>
                    <h3 className='font-semibold text-primary text-lg lg:text-2xl'>Nous soutenons les entreprises et projets dans leur quête de financement. Que ce soit pour des investissements, des expansions ou des projets spécifiques, notre expertise en recherche de financement nous permet de connecter nos clients avec les sources de financement les plus adaptées à lurs besoins.</h3>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default RechercheDeFinancement