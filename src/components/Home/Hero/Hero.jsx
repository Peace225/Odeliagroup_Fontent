import React, {useState} from 'react';
import img from '../../../images/carousel3.png';
import logo from '../../../images/logo.png';
import icon from '../../../images/icon1.jpg';
import Slider from 'react-slick';
import Modal from './Modal';
import Profil from './Profil';

const Hero = () => {
    const [open, setOpen] = useState(false);

    const newsData=[
        {
            id:0,
            img:img,
            
        },
        {
            id:1,
            img:logo,
           
        },
        {
            id:2,
            img:icon,
            
        },
        
    ];

    const  settings ={
        dots:false,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:true,
        arrows:false,
        responsive:[
            {
                breakpoint:1023,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                    initialSlide:2
                },
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    initialSlide:2
                },
            },
        ],
    };

    
  return (
    <div className='bg-slate-100 text-black'>
    <div className='h-screen container mx-auto flex flex-col justify-center md:flex-row items-center'>
        {/* Section content */}
        <div className='w-full md:w-3/5 space-y-2 mt-12'>
            <h1 className='text-4xl lg:text-6xl text-primary font-bold leading-tight'>
                Bienvenue sur le site Odelia Group
            </h1>
            <p className='text-sm lg:text-base'>
                Nous sommes experts dans la gestion et l'optimisation des ressources pour divers secteurs d'activités.
                Notre entreprise se distingue par son expertise dans plusieurs domaines clés :{' '}
                <span className='text-red-600'>
                    l'immobilier, le foncier, la représentation commerciale, inter-médiation, recherche de financement, import-export...
                </span>
            </p>
            <div className='flex gap-8'>
                <button 
                    onClick={() => setOpen(true)}
                    className='bg-red-600 text-white py-2 px-6 rounded-md hover:scale-95 transition duration-150 ease-linear'>
                    Plus de détails
                </button>
            </div>
            {/* <Modal open={open} onClose={() => setOpen(false)} className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
                <div className='text-center z-50'>
                    <h3 className='text-lg font-black text-red-600 mb-4'>Bienvenue chez ODELIAGROUP</h3>
                    <p className='text-sm text-gray-500 mb-2'>
                        Nous sommes experts dans la gestion et l'optimisation des ressources pour divers secteurs d'activité.
                    </p>
                    <p className='text-sm text-gray-500 mb-2'>
                        Notre entreprise se distingue par son expertise dans plusieurs domaines clés :{' '}
                        <span className='text-red-500'>
                            l'Immobilier, le foncier, la représentation commerciale, inter-médiation, recherche de financement, import-export...
                        </span>
                    </p>
                    <p className='text-sm text-gray-500 mb-2'>
                        Notre équipe d'experts passionnés est composée d'agents qualifiés qui possèdent une connaissance approfondie du marché.
                    </p>
                    <p className='text-sm text-gray-500 mb-2'>
                        Ils seront là pour vous conseiller, vous guider et vous aider à prendre des décisions éclairées.
                    </p>
                    <p className='text-sm text-gray-500'>
                        C'est pourquoi nous mettons un point d'honneur à vous offrir un service personnalisé, professionnel et de qualité.
                    </p>
                </div>
            </Modal> */}
             {/* Modal */}
             {open && (
                <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50'>
                    <div className='bg-white text-center p-6 rounded-lg shadow-lg'>
                        <h3 className='text-lg font-black text-red-600 mb-4'>Bienvenue sur le site ODELIAGROUP</h3>
                        <p className='text-sm text-gray-500 mb-2'>
                            Nous sommes experts dans la gestion et l'optimisation des ressources pour divers secteurs d'activité.
                        </p>
                        <p className='text-sm text-gray-500 mb-2'>
                            Notre entreprise se distingue par son expertise dans plusieurs domaines clés :{' '}
                            <span className='text-red-500'>
                                l'Immobilier, le foncier, la représentation commerciale, inter-médiation, recherche de financement, import-export...
                            </span>
                        </p>
                        <p className='text-sm text-gray-500 mb-2'>
                            Notre équipe d'experts passionnés est composée d'agents qualifiés qui possèdent une connaissance approfondie du marché.
                        </p>
                        <p className='text-sm text-gray-500 mb-2'>
                            Ils seront là pour vous conseiller, vous guider et vous aider à prendre des décisions éclairées.
                        </p>
                        <p className='text-sm text-gray-500'>
                            C'est pourquoi nous mettons un point d'honneur à vous offrir un service personnalisé, professionnel et de qualité.
                        </p>
                        <button onClick={() => setOpen(false)} className='mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-150 ease-linear'>
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </div>
        {/* Section image */}
        <div className='w-full md:w-2/4 h-auto relative '>
                    <Slider {...settings}>
                        {newsData.map((item) => (
                            <Profil key={item.id} img={item.img} className='w-full h-96 object-cover' />
                        ))}
                    </Slider>
        </div>
    </div>
</div>
  )
}

export default Hero