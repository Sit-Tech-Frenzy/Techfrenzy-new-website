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
          className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 pt-5'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet augue venenatis fermentum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel quo quaerat doloremque nemo libero exercitationem nesciunt distinctio suscipit dolor. Cumque vitae quae aspernatur enim voluptatibus nemo doloremque voluptas atque!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquid eaque explicabo harum id corrupti magnam error doloribus laudantium architecto sunt, totam quia cum nobis accusantium facere velit provident quibusdam.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
