import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import VenteMaison from './VenteMaison';
import Image1 from '../../../images/Bonoua.png';
import Image2 from '../../../images/carousel1.jpg';
import Image3 from '../../../images/propriété1.jpg';
import Image4 from '../../../images/vente.jpg';
import Image5 from '../../../images/propriété2.jpeg';

const Vente = () => {

    const houseData=[
        {
            id:0,
            img:Image1,
            name:"Bonoua",
            price:"4.000.000 FCFA",

        },
        {
            id:1,
            img:Image2,
            name:"Bonoua",
            price:"4.000.000 FCFA",

        },
        {
            id:2,
            img:Image3,
            name:"Bonoua",
            price:"4.000.000 FCFA",

        },
        {
            id:3,
            img:Image4,
            name:"Bonoua",
            price:"4.000.000 FCFA",

        },
        {
            id:4,
            img:Image5,
            name:"Bonoua",
            price:"4.000.000 FCFA",

        },
        {
            id:5,
            img:Image3,
            name:"Bonoua",
            price:"4.000.000 FCFA",

        },
    ];
    const  settings ={
        dots:false,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        speed:2000,
        cssEase:"linear",
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
    <div className='container mt-14'>
        <h1 className='font-bold text-4xl text-center'>
            En vedette <span className='text-primary'>Terrains</span>
        </h1>
        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quos</p>

        <div className='mt-8'>
            <Slider {...settings}>
                {houseData.map((item)=>(
                    <VenteMaison
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    />
                )
                   
                )}

            </Slider>
        </div>
    </div>
  )
}

export default Vente