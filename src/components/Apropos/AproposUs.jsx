import React from 'react'
import Vision from './Vision'

const AproposUs = () => {
  return (
    <div className='container pt-24'>
        {/* Titre de la section */}
        <div>
            <h1 className='font-bold text-red-600 text-4xl text-center mt-8'>
                Apropos <span className='text-primary'>De Nous</span>
            </h1>
            {/* Brève description */}
            <p className='text-center text-lg mt-4 mb-8'>
                Nous sommes une entreprise innovante engagée à fournir des solutions immobilières durables et responsables. Découvrez notre vision et notre approche qui nous permettent de créer un impact positif sur l'environnement et la société.
            </p>
        </div>

        {/* Vision */}
        <Vision />
    </div>
  )
}

export default AproposUs
