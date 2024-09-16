import React, {useState} from 'react';
import img from '../../images/N.jpg';
import VisionDetail from "./VisionDetail";


const Vision = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-16'>
        <div className='w-full md:w-2/5'>
            <img src={img} alt='img' className='rounded-lg'/>
        </div>
            {/* section content */}
        <div className='w-full md:w-2/4 space-y-4'>
            <h1 className='text-4xl text-red-600 font-bold'>Notre Vision</h1>
            <h3 className='font-semibold text-primary text-lg lg:text-2xl'>Nous aspirons à être reconnus comme le leader incontesté au niveau national et international dans nos différents domaines d'activités en offrant un service exceptionnel,
                des solutions novatrices et une contribution positive à notre société.
            </h3>
            
            <div className='flex gap-8'>
                    <button 
                        onClick={() =>setOpen(true)}
                        className='bg-red-600 text-white py-1 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear'> Plus de détails
                    </button>
             </div>
             <VisionDetail open={open} onClose={() =>setOpen(false)}>
                        <div className='text-center  w-50'>
                            <div className='mx-auto my-2 w-50'>
                                <h3 className='text-lg font-black text-red-600'>Notre Vision</h3>
                                <p className='text-sm text-gray-500'>
                                Nous aspirons à être reconnus comme le leader incontesté au niveau national  et international dans nos différents domaines <br/> d'activités en offrant un service exceptionnel, des solutions novatrices  et une contribution positive à notre société.<br/>
                                Notre vision repose sur les principes suivants:
                                     
                                </p><br/>
                                <p className='text-sm text-gray-500'>
                                    <span className='text-red-600 text-semibold'>Excellence et professionnalisme:</span> Nous nous efforçons constamment d'atteindre l'Excellence dans tout ce que nous faisons<br/>
                                     en offrant un service de qualité supérieure à nos clients,  en mettant l'accent sur l'intégrité, l'éthique et la transparence.<br/>
                                    
                                </p>
                                <p className='text-sm text-gray-500'>
                                    <span className='text-red-500 text-semibold'>Innovation et adaptation :</span> Nous croyons en la puissance de l'innovation et de l'adaptation aux changements du marché.<br/>
                                    Nous restons constamment à l'affût des dernières tendances et des avancées technologique. Cela nous permet de mieux  <br/> 
                                    servir nos clients en utilisant des outils et des stratégies innovants pour atteindre leurs objectifs.
                                </p>
                                <p className='text-sm text-gray-500'>
                                    <span className='text-red-500 text-semibold'>Partenariats durables :</span> Nous croyons en l'importance de bâtir des partenariats solides et durables, fondés sur la confiance<br/>
                                    mutuelle et le respect. Notre objectif est de devenir le partenaire de confiance de choix pour tous ceux qui cherchent  <br/> 
                                    à acheter, vendre ou développer des biens immobiliers.
                                </p>
                            </div>

                        </div>
              </VisionDetail>
        </div>
       
    </div>
  )
}

export default Vision