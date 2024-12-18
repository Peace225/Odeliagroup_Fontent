import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCards = ({ icon, title, subtitles = [], internalLink }) => {
  return (
    <Link to={internalLink} className='block'>
      <div className='text-center p-8 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer'>
        <p className="text-5xl">{icon}</p>
        <h1 className='text-primary text-3xl font-bold'>{title}</h1>
        {subtitles.map((subtitle, index) => (
          <p key={index} className='text-sm text-gray-600'>{subtitle}</p>
        ))}
        <div className="mt-4">
          <Link
            to={internalLink}
            className='text-blue-500 underline hover:text-blue-700 font-semibold'>
            Savoir plus
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCards;
