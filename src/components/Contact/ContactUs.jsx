import React, { useState } from 'react';
import { MdWifiCalling3 } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '225719738096'; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='flex w-full min-h-screen justify-center items-center pt-24'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden'>
            <div className='flex flex-col space-y-8 justify-between'>
                <div>
                    <h1 className='font-bold text-4xl tracking-wide'>Contactez-Nous</h1>
                    <p className='pt-2 text-cyan-100 text-sm'>
                      Découvrez comment nous pouvons transformer vos rêves immobiliers en réalité : contactez-nous dès aujourd’hui pour explorer des opportunités qui vont au-delà de vos attentes.
                    </p>
                </div>
                <div className='flex flex-col space-y-6'>
                    <div className='inline-flex space-x-2 items-center'>
                        <MdWifiCalling3 size={25} className='text-red-500 text-xl' /> <span> +(225) 07 19 73 80 96</span>
                    </div>
                    <div className='inline-flex space-x-2 items-center'>
                        <IoMdMail size={25} className='text-red-500 text-xl' /> <span> contact@Odeliagroup.com</span>
                    </div>
                    <div className='inline-flex space-x-2 items-center'>
                        <IoLocation size={25} className='text-red-500 text-xl' /> <span> 08 BP Abidjan - Côte d'Ivoire</span>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                    {submitted ? (
                      <p className='text-green-600'>Merci pour votre message ! Nous vous contacterons bientôt.</p>
                    ) : (
                      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                          <div>
                              <label className='text-sm'>Votre Nom</label>
                              <input 
                                  type='text' 
                                  placeholder='Votre nom' 
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-500'
                              />
                          </div>
                          <div>
                              <label className='text-sm'>Adresse Email</label>
                              <input 
                                  type='email' 
                                  placeholder='Votre email' 
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-500'
                              />
                          </div>
                          <div>
                              <label className='text-sm'>Message</label>
                              <textarea 
                                  placeholder='Votre message' 
                                  rows='4' 
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-500'
                              ></textarea>
                          </div>
                          <button type='submit' className='inline-block self-end bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
                              Envoyer via WhatsApp
                          </button>
                      </form>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContactUs;
