import React from 'react';
import { motion } from 'framer-motion';
import { CountDown } from './CountDown';

const AnimatedText = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%', scale: 0 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.div>
  );
};

const AnimatedButton = ({ text }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }} // Faster transition duration
      whileHover={{ scale: 1.1 }} // Zoom effect when hovered over
      className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-xl'
    >
      {text}
    </motion.button>
  );
};

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-6xl font-bold md:py-6 '>
          <AnimatedText text='TechFrenzy' />
        </h1>
        <br/>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          <AnimatedText text="Join us at TechFrenzy, where we foster innovation and collaboration. Innovate, and grow with us." /> 
          <AnimatedText text="Let's turn ideas into reality together"/>
        </p>
        <a href="https://forms.gle/H57CzCWW8baPNfVb9" target='_blank' rel='noopener noreferrer'>
          <AnimatedButton text='Register Now!'/>
        </a>
        <div>
          <h2 className='text-2xl font-bold text-gray-400'>Coming soon...</h2>
          {/* <h2 className='text-2xl font-bold text-gray-500 p-4'>Hackathon begins in:</h2> */}
          {/* <CountDown /> */}
      </div>
      </div>
    </div>
  );
};

export default Hero;
