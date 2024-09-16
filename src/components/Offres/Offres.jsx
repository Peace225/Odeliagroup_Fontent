import React from 'react'
import CarsHouse from './CarsHouse';
import Image1 from '../../images/Bonoua.png';
import Image2 from '../../images/carousel1.jpg';
import Image3 from '../../images/Bonoua.png';
import Image4 from '../../images/Bonoua.png';
import Image5 from '../../images/Bonoua.png';

const Offres = () => {

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
  return (
    <div className='container pt-24 mx-auto'>
        <div>
            <h1 className='font-bold text-4xl text-center'>Nos <pan className='text-primary'> Offres</pan></h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
            {houseData.map((item)=>(
                <div>
                    <CarsHouse
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Offres