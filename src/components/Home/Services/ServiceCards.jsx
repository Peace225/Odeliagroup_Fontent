import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCards = ({icon,  title, subtitles =[],  internalLink }) => {
  return (
    <Link to={internalLink} className='block'>
      <div className='text-center p-8 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer'>
        <p>{icon}</p>
        <h1 className='text-primary text-3xl font-bold'>{title}</h1>
        {subtitles.map((subtile, index) => (
          <p key={index} className='text-sm'>{subtile}</p>
        ))}
        <Link to={internalLink} className='text-blue-500 underline hover:text-blue-700'>
          Savoir plus
        </Link>
      </div>
    </Link>
    
  );
};

export default ServiceCards;