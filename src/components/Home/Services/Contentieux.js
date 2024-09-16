import React from 'react';
import img from '../../../images/Contentieux1.jpg';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const Contentieux = () => {
  return (
    <>
        <Navbar/>
        <div className='container my-10 mx-auto pt-20'>
            <div>
                <h1 className='font-bold text-red-600 text-4xl text-center'>Service <span className='text-primary'>Contentieux</span> </h1>
            </div>
            <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
                {/* section img */}
                <div className='w-full md:w-2/4'>
                    <img src={img} alt='img' className='rounded-lg' />
                </div>
                {/* section content */}
                <div className='w-full md:w-2/4 space-y-4'>
                    <h3 className='font-semibold text-primary text-lg lg:text-2xl'>Nous offrons un service spécialisé en contentieux immobilier pour résoudre tous les litiges liés à l'achat de terrains ou d'autres biens immobiliers. Que ce soit pour des conflits liés à des transactions, des droits de propriété ou d'autres questions juridiques complexes, notre équipe de professionnels expérimentés est prête à défendre vos intérêts et à trouver des solutions efficaces.</h3>
                    
                </div>
            </div>
        </div>
        <Footer/>
</>
  )
}

export default Contentieux