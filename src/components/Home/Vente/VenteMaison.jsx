import React from 'react'

const VenteMaison = ({id, img, name, price}) => {
  return (
    <div className='border-2 border-primary bg-primary text-black rounded-xl mb-2 cursor-pointer hover:scale-95 hover:bg-primary 
    transition duration-200 ease-linear' key={id}>
        <div>
            <img src={img} alt='img' className='rounded-t-xl w-full' />
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-xl text-primary pt-2'>{name} </h1>
            <div className='flex gap-10 pt-2'>
                
            </div>
        </div>
    </div>
  )
}

export default VenteMaison