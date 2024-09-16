import React from 'react';
import img from '../../../images/import.jpg';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const ImportExport = () => {
  return (
    <>
    <Navbar/>
    <div className='container my-10 mx-auto pt-20'>
        <div>
            <h1 className='font-bold text-red-600 text-4xl text-center'>Import <span className='text-primary'>Export</span> </h1>
        </div>
        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
            {/* section img */}
            <div className='w-full md:w-2/4'>
                <img src={img} alt='img' className='rounded-lg' />
            </div>
            {/* section content */}
            <div className='w-full md:w-2/4 space-y-4'>
                <h3 className='font-semibold text-primary text-lg lg:text-2xl'>En tant qu'acteurs clés dans le commerce international, nous facilitons les opérations d'importation et d'exportation. Nous gérons les aspects logistiques, douaniers et réglementaires pour garantir une chaine d'approvisionnement fluide et conforme.</h3>
            </div>
        </div>
    </div>
    <Footer/>
</>
  )
}

export default ImportExport