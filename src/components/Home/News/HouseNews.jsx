import React from 'react';
import Image1 from '../../../images/Bonoua.png';
import Image2 from '../../../images/Jacquiville.jpg';
import Image3 from '../../../images/Bonoua1.jpg';
import Slider from 'react-slick';
import HouseNewsCard from './HouseNewsCard';


const HouseNews = () => {
    const newsData=[
        {
            id:0,
            img:Image1,
            desc:'Terrains a vendre avec Arrêté Ministériel',
        },
        {
            id:1,
            img:Image2,
            desc:'Terrains a vendre avec Arrêté Ministériel',
        },
        {
            id:2,
            img:Image3,
            desc:'Terrains a vendre avec Arrêté Ministériel',
        },
        {
            id:3,
            img:Image2,
            desc:'Terrains a vendre avec Arrêté Ministériel',
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
    <div className='container mt-14 mx-auto'>
        <h1 className='font-bold text-red-600 text-4xl text-center'>
            Nouvelles &<span className='text-primary'> Conseils sur les biens immobiliers</span></h1>
        
        <div className='mt-8'>
            <Slider {...settings} >
                {newsData.map((item)=>(
                    <HouseNewsCard  key={item.id} img={item.img} desc={item.desc} />
                ))}
            </Slider>
        </div>
    
    </div>
  )
}

export default HouseNews