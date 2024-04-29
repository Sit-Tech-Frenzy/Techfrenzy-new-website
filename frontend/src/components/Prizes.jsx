import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export const PrizeComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const prizes = [
    { position: 'First Prize', description: '🏆 Memento, Certificate, and Cash Rewards' },
    { position: 'Second Prize', description: '🥈 Memento, Certificate, and Cash Rewards' },
    { position: 'Third Prize', description: '🥉 Memento, Certificate, and Cash Rewards' },
    { position: 'Remaining All Teams', description: '📜 Participation certificates for your resume ' },
  ];

  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="bg-gray-800 lg:p-6 p-4 rounded-md transform hover:shadow-lg transition-transform duration-300 text-center"
            data-aos="fade-up"
          >
            <h3 className="lg:text-2xl text-xl font-semibold text-white">{prize.position}</h3>
            <p className="text-gray-400 text-xl">{prize.description}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-xl pt-10 text-center">
        If your project turns out to be truly innovative and valuable, we could consider applying for a patent to further support our research efforts.<br/> This would be a significant achievement.
      </p>
    </div>
  );
};
