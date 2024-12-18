import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='mt-14 bg-red-600 text-white'>
        <div>
            <p className='text-center py-4'>
                &copy; Odeliagroup développé par 
                <span className='text-blue-500 font-semibold mx-2'>SERGUEÏ KOKOLIKO</span> | Tous droits réservés
            </p>
        </div>
    </footer>
  );
};

export default Footer;
