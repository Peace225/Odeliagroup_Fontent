import React from 'react'

const NousHouse = ({icon, title}) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100 hover:bg-secondary hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer'>
        <p>{icon}</p>
        <h1 className='text-primary text-3xl font-bold'>{title}</h1>
        <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Numquam modi sint voluptatibus. Dolores rem minima quam blanditiis
              aliquid aperiam impedit nobis? Deserunt!
        </p>
    </div>
  )
}

export default NousHouse