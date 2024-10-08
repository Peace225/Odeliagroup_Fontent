import React from 'react'

const CarsHouse = ({id, img, name, price}) => {
  return (
    <div
    className='border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 cursor-pointer'
    key={id}>
        <img  src={img} alt='img' />
        <h1 className='font-bold text-xl pl-5 text-primary'>{name}</h1>
        
        <div className='flex justify-between px-6 pb-2'>
            <h3 className='font-semibold text-xl'>FCFA{price}</h3>
            <button className='bg-secondary text-white text-base md:text-lg px-2 md:px-3 py-1 rounded-md
            hover:bg-primary transition duration-200 ease-linear'>Réserver</button>
        </div>
    </div>
  )
}

export default CarsHouse