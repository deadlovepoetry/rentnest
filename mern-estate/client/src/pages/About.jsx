//import React from 'react';
import { FaHandHoldingUsd, FaUsers, FaChartLine } from 'react-icons/fa';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      {/* Banner Image */}
      <div className='mb-8'>
        <img
          className='w-full h-64 object-cover rounded-lg shadow-lg'
          src='https://plus.unsplash.com/premium_photo-1687960116696-d1e38565140f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
          alt='Real Estate Banner'
        />
      </div>

      {/* Title */}
      <h1 className='text-4xl font-extrabold mb-6 text-customBlue'>
        About RENTNEST
      </h1>

      {/* About Text */}
      <p className="mb-6 text-lg text-slate-700 leading-relaxed font-serif">
    Sahand Estate is a leading real estate agency specializing in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team is dedicated to providing exceptional service.
</p>

      {/* Our Mission Section with Icons */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8'>
        <div>
          <h2 className='text-2xl font-bold text-cyan-700 mb-4'>Our Mission</h2>
          <ul className='space-y-4'>
            <li className='flex items-start'>
              <FaHandHoldingUsd className='text-blue-600 text-2xl mr-4' />
              <span className='text-slate-700 text-lg leading-relaxed font-mono'>
                Expert advice for achieving real estate goals.
              </span>
            </li>
            <li className='flex items-start'>
              <FaUsers className='text-blue-600 text-2xl mr-4' />
              <span className='text-slate-700 text-lg leading-relaxed font-mono'>
                Personalized services tailored to your needs.
              </span>
            </li>
            <li className='flex items-start'>
              <FaChartLine className='text-blue-600 text-2xl mr-4' />
              <span className='text-slate-700 text-lg leading-relaxed font-mono'>
                In-depth understanding of the local market.
              </span>
            </li>
          </ul>
        </div>
        <div>
          <img
            className='w-full h-48 object-cover rounded-lg shadow-lg'
            src='https://plus.unsplash.com/premium_photo-1682309827763-4aa187e27a96?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            alt='Mission Image'
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className='text-center mt-10'>
        <a
          href='/contact'
          className='bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg text-lg'
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
