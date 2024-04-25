import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    stemProfession: '',
    experience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      stemProfession: formData.stemProfession,
      experience: formData.experience
    };

    emailjs.send('service_gh9nrcl', 'template_onk9uvm', templateParams, 'tOcgiKDcc5vg7dBz-')
      .then((response) => {
        console.log('Email sent successfully!', response);
      }, (error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className='bg-blue-900 h-fit flex justify-center items-center'>
    <div className='p-8 bg-blue-900'>
      <h1 className='text-center text-white text-sm sm:text-base font-bold w-fit mb-4'>Are You Ready to Unlock Your Exciting Career Opportunities in Germany?</h1>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center space-y-4'>
        <div className='w-full'>
          <label htmlFor='name' className='block text-white'>Name:</label>
          <input 
            type='text' 
            id='name' 
            name='name' 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder='Enter your name' 
            className='w-full p-2 border border-white bg-transparent text-white'
          />
        </div>
        <div className='w-full'>
          <label htmlFor='email' className='block text-white'>Email:</label>
          <input 
            type='email' 
            id='email' 
            name='email' 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder='Enter your email' 
            className='w-full p-2 border border-white bg-transparent text-white'
          />
        </div>
        <div className='w-full'>
          <label htmlFor='phone' className='block text-white'>Phone Number:</label>
          <input 
            type='tel' 
            id='phone' 
            name='phone' 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            placeholder='Enter your phone number' 
            className='w-full p-2 border border-white bg-transparent text-white'
          />
        </div>
        <div className='w-full'>
          <label htmlFor='location' className='block text-white'>Location:</label>
          <input 
            type='text' 
            id='location' 
            name='location' 
            value={formData.location} 
            onChange={handleChange} 
            required 
            placeholder='Enter your location' 
            className='w-full p-2 border border-white bg-transparent text-white'
          />
        </div>
        <div className='w-full'>
            <label htmlFor='stemProfession' className='block text-white'>Do you belong to STEM profession?</label>
            <input 
              type='text' 
              id='stemProfession' 
              name='stemProfession' 
              value={formData.stemProfession} 
              onChange={handleChange} 
              required 
              placeholder='YES / NO' 
              className='w-full p-2 border border-white bg-transparent text-white'
            />
          </div>
        <div className='w-full'>
          <label htmlFor='experience' className='block text-white'>Years of Experience:</label>
          <input 
            type='number' 
            id='experience' 
            name='experience' 
            value={formData.experience} 
            onChange={handleChange} 
            required 
            placeholder='Enter your experience' 
            className='w-full p-2 border border-white bg-transparent text-white'
          />
        </div>
        <button type='submit' className='bg-yellow-300 font-bold text-blue-900 px-4 py-2 w-full'>Book Free Counselling!</button>
      </form>
    </div>
  </div>
  
  );
};

export default ContactForm;
