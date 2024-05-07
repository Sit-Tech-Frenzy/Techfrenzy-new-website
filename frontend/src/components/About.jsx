import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: '-100%' }, // Slide in from left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={controls}
      className='flex justify-center items-center h-screen'
    >
      <div className='rounded-xl shadow-2xl p-8 sm:p-12 md:p-10 lg:p-20 mx-4 sm:mx-2 bg-gradient-to-tl from-opacity-10 to-transparent backdrop-blur-10 border border-opacity-18'>
        <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 text-white'>About Us</h3>
        <hr className='bg-[#00df9a] h-1 mt-6 mb-5' />
        <motion.p
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-lg sm:text-xl lg:text-2xl text-gray-400 pt-5 container'
        >
          <strong>Welcome to SIT Tech Frenzy,</strong> where innovation meets collaboration!
          We are dedicated to providing a vibrant ecosystem for tech enthusiasts and beginners. 

          <strong>Our mission</strong> is to provide a platform where young minds can connect, learn, and grow together in the ever-evolving landscape of technology with guidance and assistance from experts and seniors always!

          Our community is driven by a shared passion for innovation and a commitment to knowledge sharing. Through our events, students get the opportunity to network with like-minded individuals and dive into a variety of challenges designed to push their limits and spark their creativity. 

          Some events like:
          <ul>
            <li>Tech Frenzy Hackathon</li>
            <li>Ideathon 2.0</li>
          </ul>
          have already marked their places, and we’ll be soon up with many more such events! 

          <strong>Join us,</strong> and together, let’s compete for amazing prizes and recognition for your innovative solutions, shaping the future of technology.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
