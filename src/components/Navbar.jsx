import React, { useState } from 'react';
import Logo from '../images/logo.png';
import {AiOutlineClose} from "react-icons/ai";
import {RiMenuUnfoldFill} from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = ()=>{
        setMenu(!menu);
    };
  return (
    <header className='fixed w-full z-10 bg-red-600 text-white py-4 '>
       {/* section navigation  */}
       <nav  className='container flex justify-between items-center mx-auto'>
        <div className='flex items-center gap-1'>
            <img src={Logo} alt='logo' className='w-12 border-2 bg-white rounded-3xl'/>
            <Link to='/' className='font-bold text-2xl'>Odeliagroup</Link>
        </div>
        <div className='hidden md:flex items-center gap-8 font-medium text-xl'>
            <Link to='/'className='hover:text-primary transition duration-200 ease-linear'>Accueil</Link>
            <Link to='/apropos'className='hover:text-primary transition duration-200 ease-linear'>Apropos</Link>
            <Link to='/nosoffres'className='hover:text-primary transition duration-200 ease-linear'>Nos Offres</Link>
            <Link to='/services'className='hover:text-primary transition duration-200 ease-linear'>Services</Link>
            
            <Link to='/contact'  className='hidden lg:flex border-2 border-primary text-lg px-4 rounded-md hover:bg-primary transition duration-200 ease-linear'>Contact</Link>
        </div>
        <div className='md:hidden flex items-center'>
            {menu ? (
                <AiOutlineClose size={25} onClick={handleChange} aria-label='Close menu'/>
            ):(
                <RiMenuUnfoldFill size={25} onClick={handleChange} aria-label='Open menu'/>
            )}
        </div>
       </nav>
       {/* section responsive */}
       <div className={`${menu ? "translate-x-0" :"-translate-x-full"} md:hidden flex flex-col absolute bg-red-600 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}>
       <Link to='/'className='hover:text-primary transition duration-200 ease-linear'>Accueil</Link>
            <Link to='/apropos'className='hover:text-primary transition duration-200 ease-linear'>Apropos</Link>
            <Link to='/nosoffres'className='hover:text-primary transition duration-200 ease-linear'>Nos Offres</Link>
            <Link to='/services'className='hover:text-primary transition duration-200 ease-linear'>Services</Link>
            <Link to='/contact' className='border-2 border-primary py-1 px-4 rounded-md' onClick={handleChange}>Contact</Link>
            

       </div>
    </header>
  );
};

export default Navbar