import React from 'react';

const HouseNewsCard = ({ id, img, desc }) => {
  return (
    <div className='border-2 border-secondary rounded-md cursor-pointer'>
        <img src={img} alt={`Image de l'annonce ${id}`} className='w-full h-64 object-cover rounded-t-md'/>
        <h3 className='font-semibold bg-secondary text-red-600 text-lg p-4'>{desc}</h3>
    </div>
  );
}

export default HouseNewsCard;
