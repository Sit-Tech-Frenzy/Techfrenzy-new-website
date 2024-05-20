import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import Main_logo from '../assets/Logo_main.png';

const Footer = () => {
  return (
    <div className='container mx-auto py-16 px-4 text-gray-300 lg:flex justify-between mt-6'>
      <div className=' max-w-96'>
        <img src={Main_logo} alt='logo' className='h-12 w-32' />
        <p className='py-4'>
          SIT Tech Frenzy is a hub for tech lovers! Join our events to connect, learn, and build the future of technology with workshops, hackathons, and more!
        </p>
        <div className='flex justify-between md:w-[75%] my-6 cursor-pointer'>
          <a href='https://www.linkedin.com/company/sit-techfrenzy/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={30} />
          </a>
          <a href='https://www.facebook.com/profile.php?id=61551874715764&mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
            <FaFacebookSquare size={30} />
          </a>
          <a href='https://www.instagram.com/sit_techfrenzy' target='_blank' rel='noopener noreferrer'>
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div>
        {/* <div>
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
        </div> */}
        {/* <div>
          <h6 className='font-medium text-gray-400'>TechFrenzy</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Positions</li>
            <li className='py-2 text-sm'>Magazine</li>
          </ul>
        </div> */}
        <div>
          <h6 className='font-medium text-gray-400 pt-6'>Contact Us With Email</h6>
          <ul>
            <li className='py-2 text-sm'>sittechfrenzy@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;