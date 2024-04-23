export const Prizes = () => {
    return (
      <div className="flex flex-col items-center space-y-8 text-white">
        <div className="prize-section hover:shadow-md rounded-lg px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-700"> {/* Added hover effect and gradient */}
          <i className="fas fa-trophy text-xl text-blue-500 mr-2"></i> {/* Custom color for title */}
          <h3 className="text-xl font-bold">First Place:</h3>
          <p>Memento, Certificate and Rewards</p>
        </div>
        <div className="prize-section hover:shadow-md rounded-lg px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-700">
          <i className="fas fa-certificate text-xl mr-2"></i>
          <h3 className="text-xl font-bold">Second Place:</h3>
          <p>Memento, Certificate and Rewards</p>
        </div>
        {/* ... similar for other prizes */}
        <div className="prize-section hover:shadow-md rounded-lg px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-700">
          <i className="fas fa-user-check text-xl mr-2"></i>
          <h3 className="text-xl font-bold">All Participants:</h3>
          <p>Participation Certificate</p>
        </div>
      </div>
    );
  };
  