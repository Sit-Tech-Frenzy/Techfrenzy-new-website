import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TechFrnzy</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Teams</h6>
        <ul>
            <li className='py-2 text-sm'>Organizer</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Technical</li>
            <li className='py-2 text-sm'>Management</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Content</h6>
        <ul>
            <li className='py-2 text-sm'>Home</li>
            <li className='py-2 text-sm'>Timeline</li>
            <li className='py-2 text-sm'>Team Member</li>
            <li className='py-2 text-sm'>Timer</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>TechFrenzy</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Positions</li>
            <li className='py-2 text-sm'>Magazine</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Contact Us With Email</h6>
        <ul>
            <li className='py-2 text-sm'>TechFrenzy@gmail.com</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;