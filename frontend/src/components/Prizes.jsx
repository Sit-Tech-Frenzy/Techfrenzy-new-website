import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export const PrizeComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const prizes = [
    { position: 'First Prize', description: '🏆 Memento, Certificate, and Rewards' },
    { position: 'Second Prize', description: '🥈 Memento, Certificate, and Rewards 💲' },
    { position: 'Third Prize', description: '🥉 Memento, Certificate, and Rewards 💲' },
    { position: 'Remaining All Teams', description: 'Participation certificates for your resume 📜' },
  ];

  return (
    <div className="bg-black rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-md transform hover:shadow-lg transition-transform duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-white">{prize.position}</h3>
            <p className="text-gray-400">{prize.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
