import React from 'react';
import img from '../../images/op.jpg';

const Approch = () => {
  return (
    <div className='flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14'>
        {/* section content */}
        <div className='w-full md:w-2/4 space-y-4'>
            <h1 className='text-4xl font-bold text-red-600'>Notre Approche</h1>
            <h2 className='font-semibold text-lg lg:text-2xl'>Donner aux individus les moyens d'archiver les solutions immobilières durable
                et d'avoir un impact positif sur l'environnement
            </h2>
            
        </div>

        {/* section image */}
       <div className='w-full md:w-2/5'>
         <img src={img} alt='' className='rounded-lg'/>
       </div>
    </div>
  )
}

export default Approch