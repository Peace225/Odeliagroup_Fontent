import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import VenteMaison from './VenteMaison';
import Image1 from '../../../images/Bonoua.png';
import Image2 from '../../../images/Arnaque.jpg';
import Image3 from '../../../images/Jacquiville.jpg';
import Image4 from '../../../images/contentieux.3.jpg';
import Image5 from '../../../images/Bonoua1.jpg';

const Vente = () => {

    const houseData = [
        {
            id: 0,
            img: Image1,
            name: "Terrain à Bonoua",
            price: "500 000 CFA"
        },
        {
            id: 1,
            img: Image2,
            name: "Terrain à Abidjan",
            price: "1 200 000 CFA"
        },
        {
            id: 2,
            img: Image3,
            name: "Terrain à JacquiVille",
            price: "800 000 CFA"
        },
        {
            id: 3,
            img: Image4,
            name: "Terrainà Cocody",
            price: "750 000 CFA"
        },
        {
            id: 4,
            img: Image5,
            name: "Terrain à Abidjan",
            price: "300 000 CFA"
        },
        {
            id: 5,
            img: Image3,
            name: "Terrain à Yopougon",
            price: "600 000 CFA"
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div className='container mt-14 mx-auto'>
            <h1 className='font-bold text-4xl text-center'>
                Nos <span className='text-primary'>Actualités</span>
            </h1>
            <div className='mt-8'>
                <Slider {...settings}>
                    {houseData.map((item) => (
                        <VenteMaison
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Vente;
