import React from 'react';
import img from '../../../images/OIP.jpeg';

const Mission = () => {
  return (
    <div className='container my-10 mx-auto'>
        <div>
            <h1 className='font-bold text-red-600 text-4xl text-center'>Notre <span className='text-primary'>Mission</span> </h1>
        </div>
        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
            {/* section img */}
            <div className='w-full md:w-2/4'>
                <img src={img} alt='img' className='rounded-lg' />
            </div>
            {/* section content */}
            <div className='w-full md:w-2/4 space-y-4'>
                <h3 className='font-semibold text-primary text-lg lg:text-2xl'>Notre mission est de fournir des solutions intégrées qui répondent aux besoins variés de nos clients.<br/> Avec une approche axée sur le client et une expertise multidimensionnelle, nous sommes le partenaire idéal pour vous aider à atteindre vos objectifs commerciaux,
                financiers et faciliter votre parcours dans le monde du foncier et de l'immobilier en vous offrant des services de qualités.</h3>
                <p className='font-semibold text-sm text-red-600 lg:text-base'>Donner aux individus les moyens de parvenir à des solutions immobilières
                et d'avoir un impact positif sur l'environnement.</p>
            </div>
        </div>
    </div>
  )
}

export default Mission