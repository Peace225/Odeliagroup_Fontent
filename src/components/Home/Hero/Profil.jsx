import React from 'react';

const Profil = ({ id, img }) => {
  return (
    <div className="w-full h-full">
      <img
        src={img}
        alt={`Image ${id}`}
        className="w-full h-96 object-cover rounded-lg" // Taille ajustée avec h-80 pour une hauteur plus grande
      />
    </div>
  );
};

export default Profil;
