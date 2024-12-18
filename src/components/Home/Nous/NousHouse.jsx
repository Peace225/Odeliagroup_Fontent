import React from 'react'

const NousHouse = ({ icon, title }) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100 hover:bg-secondary hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer'>
        <div className="text-center mb-4">
            {icon}
        </div>
        <h2 className='text-primary text-3xl font-bold'>{title}</h2>
        <p className='text-sm text-gray-600'>
            Notre objectif est de vous fournir une solution qui réponde à vos besoins spécifiques. Découvrez pourquoi nous sommes le choix idéal pour vous.
        </p>
    </div>
  )
}

export default NousHouse
