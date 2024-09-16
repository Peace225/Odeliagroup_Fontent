import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className='mt-14 bg-red-600 text-white'>
        {/* <div className='flex-flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-2xl pb-4'>Odeliagroup</h1>
                <p className='mb-2 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores natus consequuntur cum, delectus ullam autem quos ab numquam itaque?</p>
            </div>
            <div className='flex flex-col gap-2 font-medium'>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Liens Pages</h1>
                <div className='flex flex-col gap-2 font-medium'>
                    <Link to='/nosoffres'className='hover:translate-x-3 transition duration-200 ease-linear'>Nos Offres</Link>
                    <Link to='/services'className='hover:translate-x-3 transition duration-200 ease-linear'>Services</Link>
                    <Link to='/apropos'className='hover:translate-x-3 transition duration-200 ease-linear'>Apropos</Link>
                    <Link to='/'className='hover:translate-x-3 transition duration-200 ease-linear'>Accueil</Link>
                </div>
            </div>

            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Biens immobiliers à vendre</h1>
                <div>
                    <Link to='/services'className='hover:text-primary transition duration-200 ease-linear'>Services</Link>   
                </div>
            </div>
            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Biens Immobilier en vente</h1>
                <div className='flex flex-col gap-2 font-medium'>
                    <Link
                    to="/"
                    className='hover:translate-x-3 transition duration-200 ease-linear'
                    >
                        Vente de Terrainns 
                    </Link>
                    <Link
                    to="/"
                    className='hover:translate-x-3 transition duration-200 ease-linear'
                    >
                        Vente de Terrainns 
                    </Link>
                    <Link
                    to="/"
                    className='hover:translate-x-3 transition duration-200 ease-linear'
                    >
                        Vente de Terrainns 
                    </Link>
                    <Link
                    to="/"
                    className='hover:translate-x-3 transition duration-200 ease-linear'
                    >
                        Vente de Terrainns 
                    </Link>
                    <Link
                    to="/"
                    className='hover:translate-x-3 transition duration-200 ease-linear'
                    >
                        Vente de Terrainns 
                    </Link>
                </div>
            </div>
            <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>En Savoir Plus</h1>
            <div className='flex flex-col gap-2 font-medium'>
                <Link
                    to="/"
                    className='hover:translate-x-3 transition duration-200 ease-linear'
                    >
                        Convivial-Utilisateur 
                </Link>
                <Link
                    to="/"
                    className='hover:translate-x-3 transition duration-200 ease-linear'
                    >
                        Recherche et Filtres 
                </Link>
                <Link
                    to="/"
                    className='hover:translate-x-3 transition duration-200 ease-linear'
                    >
                        Paiement Sécurisé 
                </Link>
                <Link
                    to="/"
                    className='hover:translate-x-3 transition duration-200 ease-linear'
                    >
                        Service de Géolocalisation 
                </Link>
            </div>
        </div> */}
        <div>
            <p className='text-center py-4'>
                &copy; Odeliagroup developer par 
                <sapn className='text-primary font-semibold mx-2'>SERGUEÏ KOKOLIKO</sapn> | Tous droits réservés
            </p>
        </div>
    </footer>
  );
};

export default Footer