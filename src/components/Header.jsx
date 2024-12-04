import React from 'react';
import { hero1, hero2 } from '../assets';

const Header = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-pink-800 to-gray-700 text-white min-h-screen flex flex-col  md:flex-row items-center justify-around  px-4 sm:px-8 md:px-20 ">
<div className="text-center mt-24 sm:mt-0 md:text-left max-w-2xl mx-auto md:ml-64">
  <h1 className="text-5xl sm:text-6xl md:text-6xl font-extrabold leading-tight">
    Remove Backgrounds{' '}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 block">
      Instantly & Effortlessly
    </span>
  </h1>
  <p className="mt-6 text-lg sm:text-xl md:text-2xl opacity-90">
    Upload your images and let AI do the magic. Perfect for e-commerce, marketing, and personal projects.
  </p>
        <div className="mt-12 flex justify-center md:justify-start">
          <label
            htmlFor="uploadFile1"
            className="px-8 sm:px-12 md:px-16 flex items-center bg-pink-700 hover:bg-pink-800 text-white text-base py-3 sm:py-5 rounded-md cursor-pointer font-[sans-serif] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 sm:w-6 mr-2 fill-white inline"
              viewBox="0 0 32 32"
            >
              <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
              <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
            </svg>
            Upload
            <input type="file" id="uploadFile1" className="hidden" />
          </label>
        </div>
      </div>
      <div className="mt-12 md:mt-0 max-w-sm mx-auto md:mr-64">
        <div className="relative group">
          <img
            src={hero1}
            alt="Original Image"
            className="rounded-lg shadow-lg w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={hero2}
            alt="Background Removed"
            className="absolute top-0 left-0 rounded-lg shadow-lg w-full h-auto object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
        <p className="mt-4 text-center text-white opacity-80">Hover to see the magic ✨</p>
      </div>
    </div>
  );
};

export default Header;