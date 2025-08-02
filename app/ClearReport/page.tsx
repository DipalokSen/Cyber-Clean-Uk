import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const ClearReportCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-purple-100 p-3 rounded-full">
          <FaFileAlt className="text-purple-600 text-2xl" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Report</h3>
      <p className="text-gray-600 mb-4">
        Receive a concise PDF report highlighting 3 critical security issues and 
        3 strengths in your system. No technical jargon—just actionable insights 
        to improve your cybersecurity.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Delivered within 24 hours of your audit.
      </p>
      <a
        href="#"
        className="inline-block text-purple-600 hover:text-purple-700 font-medium underline decoration-purple-600 hover:decoration-purple-700 transition-colors duration-200"
      >
        Download Sample
      </a>
    </div>
  );
};

export default ClearReportCard;