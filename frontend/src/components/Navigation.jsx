import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

export const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 w-full sticky top-0 mx-auto px-4 text-white font-semibold z-50 bg-gray-900/90'>
      <div className='container flex justify-between items-center mx-auto'>
        <h1 className='text-3xl font-bold text-[#00df9a]'>TechFrenzy</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 cursor-pointer'>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="timeline" smooth={true} duration={500}>Timeline</Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="prizes" smooth={true} duration={500}>Prizes</Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="sponsors" smooth={true} duration={500}>Sponsors</Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="members" smooth={true} duration={500}>Members</Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="testimonial" smooth={true} duration={500}>Testimonial</Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-500 bg-gray-700 ease-in-out duration-500 z-50' : 'ease-in-out duration-500 fixed left-[-100%] z-50na h-full'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>TechFrenzy</h1>
          <li className='p-4 cursor-pointer border-b border-gray-600'>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className='p-4 cursor-pointer border-b border-gray-600'>
            <Link to="timeline" smooth={true} duration={500}>Timeline</Link>
          </li>
          <li className='p-4 cursor-pointer border-b border-gray-600'>
            <Link to="prizes" smooth={true} duration={500}>Prizes</Link>
          </li>
          <li className='p-4 cursor-pointer border-b border-gray-600'>
            <Link to="sponsors" smooth={true} duration={500}>Sponsors</Link>
          </li>
          <li className='p-4 cursor-pointer border-b border-gray-600'>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className='p-4 cursor-pointer border-b border-gray-600'>
            <Link to="members" smooth={true} duration={500}>Members</Link>
          </li>
          <li className='p-4 cursor-pointer border-b border-gray-600'>
            <Link to="testimonial" smooth={true} duration={500}>Testimonial</Link>
          </li>
          <li className='p-4 cursor-pointer border-b border-gray-600'>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}