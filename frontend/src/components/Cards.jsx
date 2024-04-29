import React from 'react';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
             
              <p className='text-center text-4xl font-bold'>Satyaki Sinha</p>
              <h2 className='text-2xl font-bold text-center py-8'>Organizer</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>@P360</p>
                  <p className='py-2 border-b mx-8'>Full Stack Developer</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Connect</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
             
              <p className='text-center text-4xl font-bold'>Debeshpaul</p>
              <h2 className='text-2xl font-bold text-center py-8'>Organizer</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>@SIT</p>
                  <p className='py-2 border-b mx-8'>Full Stack Developer</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Connect</button>
          </div>
          
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <p className='text-center text-4xl font-bold'>Subhasree Saha</p>
              <h2 className='text-2xl font-bold text-center py-8'>Organizer</h2>

              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8'>@SIT</p>
                  <p className='py-2 border-b mx-8'>Devops</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Connect</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
