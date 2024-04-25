import React from 'react';
import hero from '../assets/hero.jpg';
import ContactForm from './Form';

const Hero = () => {
  return ( 
    <div className="relative">
      {/* Image background */}
      <img src={hero} alt="mountain" className="w-full h-full object-cover" />

      {/* Overlay with text and form */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center">
        {/* Left side with text */}
        <div className="md:w-1/2 ml-6 md:ml-32 p-2">
          <div className="p-0 py-0 rounded-lg">
            <h2 className="text-xl md:text-7xl font-bold text-red-900 mb-0 md:mb-4 uppercase">
              Germany 
            </h2>
            <h2 className="text-xl md:text-7xl font-bold text-blue-900 mb-0 md:mb-4 uppercase">
              Job seeker Visa 
            </h2>
            <p className='font-bold text-sm md:text-lg text-blue-900'>Your path to success</p>
            <p className="text-sm md:text-lg text-blue-900">
              The Germany job seeker visa opens the door to a world of possibilities for skilled professionals like you. Take the first step towards your dream career in Germany with the expert guidance of Rao Consultants. (STEM)
            </p>
          </div>
        </div>
        {/* Right side with form */}
        <div className="w-full md:w-1/3 flex justify-center p-2">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
