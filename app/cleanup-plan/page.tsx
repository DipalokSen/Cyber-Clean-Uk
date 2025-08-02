import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const CleanUpPlanCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-purple-100 p-3 rounded-full">
          <FaShieldAlt className="text-purple-600 text-2xl" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">Clean-Up Plan</h3>
      <p className="text-gray-600 mb-4">
        We guide you through applying essential hotfixes and implement a monthly 
        maintenance plan to ensure your business remains secure against evolving 
        threats.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Customized solutions for businesses of all sizes.
      </p>
      <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200 font-medium">
        Start Plan
      </button>
    </div>
  );
};

export default CleanUpPlanCard;