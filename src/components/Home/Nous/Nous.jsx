import React from 'react';
import { SiWebmoney } from 'react-icons/si';
import { FaUsers, FaShippingFast } from 'react-icons/fa';
import NousHouse from './NousHouse';

const Nous = () => {
  const icon1 = <SiWebmoney className='text-red-500 mx-auto' size={48} aria-label="Option de Financement" />;
  const icon2 = <FaUsers className='text-red-500 mx-auto' size={48} aria-label="Clients Satisfaits" />;
  const icon3 = <FaShippingFast className='text-red-500 mx-auto' size={48} aria-label="Réservation Rapide & Facile" />;
  
  return (
    <div className='flex flex-col justify-center container md:mt-16 py-10 mx-auto'>
        <h1 className='font-bold text-4xl text-center'>
            Pourquoi choisir <span className='text-primary'>Odeliagroup</span>?
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
            <NousHouse icon={icon1} title="Option de Financement"/>
            <NousHouse icon={icon2} title="Clients Satisfaits"/>
            <NousHouse icon={icon3} title="Réservation Rapide & Facile"/>
        </div>
    </div>
  );
}

export default Nous;
