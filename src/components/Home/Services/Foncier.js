import React from 'react';
import img from '../../../images/foncier.jpg';
import Navbar from '../../Navbar';
import Footer from '../../Footer';



const Foncier = () => {
  return (
    
<>
    <Navbar/>
    <div className='container my-10 mx-auto pt-20'>
        <div>
            <h1 className='font-bold text-red-600 text-4xl text-center'>Service <span className='text-primary'>Foncier</span> </h1>
        </div>
        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
            {/* section img */}
            <div className='w-full md:w-2/4'>
                <img src={img} alt='img' className='rounded-lg' />
            </div>
            {/* section content */}
            <div className='w-full md:w-2/4 space-y-4'>
                <h3 className='font-semibold text-primary text-lg lg:text-2xl'>Dans le domaine du foncier, nous accompagnons nos clients dans l'acquisition, la gestion et l'optimisation de terrains.
                    Que ce soit pour des projets résidentiels, commerciaux ou industriels, nous fournissons des conseils stratégiques et des solutions adaptées pour maximiser la valeur et l'utilisation des biens fonciers.
                </h3>
                <p className='font-semibold text-sm text-red-600 lg:text-base'>Vente de terrain : nos terrains sont approuvées avec arrêté ministériel ACD</p>
                <p className='font-semibold text-sm  text-red-600 lg:text-base'>Aménagement foncier : assurer la viabilité de vos terrains et permettre de les rendre constructibles.</p>
            </div>
        </div>
    </div>
    <Footer/>
</>
  )
}

export default Foncier