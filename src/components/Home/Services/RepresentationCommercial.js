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
                <h1 className='font-bold text-red-600 text-4xl text-center'>Représentation <span className='text-primary'>commerciale</span></h1>
            </div>
            <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
                {/* section img */}
                <div className='w-full md:w-2/4'>
                    <img src={img} alt='Représentation commerciale' className='rounded-lg' />
                </div>
                {/* section content */}
                <div className='w-full md:w-2/4 space-y-4'>
                    <h3 className='font-semibold text-primary text-lg lg:text-2xl'>
                        En tant que représentation commerciale, nous facilitons la mise en relation entre producteurs et clients. Nous développons des stratégies de vente efficaces et utilisons notre connaissance du marché pour optimiser les opportunités commerciales et maximiser les résultats pour nos partenaires.
                    </h3>
                </div>
            </div>
        </div>

        {/* Contactez-nous Section */}
         {/* Call-to-Action Button */}
         <div className='flex justify-center'>
              <button className='bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-150 ease-linear'>
                Contactez-nous pour vos besoins commerciaux
              </button>
            </div>
        <Footer/>
    </>
  )
}

export default RepresentationCommercial;
