import React from 'react';
import img from '../../../images/foncier.jpg';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const RepresentationCommercial = () => {
  return (
    <>
        <Navbar/>
        <div className='container my-10 mx-auto pt-20'>
            <div>
                <h1 className='font-bold text-red-600 text-4xl text-center'>Representation <span className='text-primary'>commercial</span> </h1>
            </div>
            <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
                {/* section img */}
                <div className='w-full md:w-2/4'>
                    <img src={img} alt='img' className='rounded-lg' />
                </div>
                {/* section content */}
                <div className='w-full md:w-2/4 space-y-4'>
                    <h3 className='font-semibold text-primary text-lg lg:text-2xl'> En tant que représentation commerciaux, nous facilitons la mise en relation entre producteurs et clients. Nous développons des stratégies de vente efficaces et utilisons notre connaissance du marché pour optimiser les opportunités commerciales et maximiser les résultats pour nos partenaires.</h3>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default RepresentationCommercial