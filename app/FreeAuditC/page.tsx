'use client';

import React, { useState } from 'react';
import { Users, X, AlertCircle, CheckCircle2, FileText, Clock, ArrowRight } from 'lucide-react';

interface AuditReport {
  title: string;
  issues: string[];
  strengths: string[];
  note: string;
}

const FreeAuditCard: React.FC = () => {
  const [showReport, setShowReport] = useState(false);

  const dummyReport: AuditReport = {
    title: 'CyberClean Audit Report',
    issues: [
      'Unsecured Wi-Fi Network',
      'Outdated Email Encryption',
      'Weak Staff Passwords'
    ],
    strengths: [
      'Regular Backup Schedule',
      'Updated Antivirus',
      'Firewalled Servers'
    ],
    note: 'This is a sample report. Full reports are generated after a real audit.'
  };

  return (
    <>
      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
        {/* Gradient background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-50" />
        
        {/* Decorative circle */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
        
        <div className="relative z-10">
          {/* Icon section */}
          <div className="mb-6 relative">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl inline-block transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
          </div>
          
          {/* Title with gradient */}
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
            Free Audit
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our expert team conducts a thorough security assessment of your setup, 
            covering Wi-Fi networks, email systems, and staff practices. Identify 
            vulnerabilities before they become threats.
          </p>
          
          {/* Time indicator */}
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-4 h-4 text-purple-500" />
            <p className="text-sm text-purple-600 font-medium">
              Takes only 15 minutes to start safeguarding your business
            </p>
          </div>
          
          {/* CTA Button */}
          <button
            onClick={() => setShowReport(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Sample Report
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Enhanced Modal */}
      {showReport && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 animate-slide-up">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    {dummyReport.title}
                  </h2>
                  <p className="text-purple-100 text-sm mt-1">Security Assessment Results</p>
                </div>
                <button
                  onClick={() => setShowReport(false)}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Issues Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Security Issues Found</h3>
                  <span className="ml-auto bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full font-medium">
                    {dummyReport.issues.length} Issues
                  </span>
                </div>
                <div className="space-y-3">
                  {dummyReport.issues.map((issue, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100 transition-all hover:border-red-200 hover:shadow-sm">
                      <span className="text-red-500 mt-0.5">
                        <AlertCircle className="w-4 h-4" />
                      </span>
                      <span className="text-gray-700 flex-1">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Security Strengths</h3>
                  <span className="ml-auto bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                    {dummyReport.strengths.length} Strengths
                  </span>
                </div>
                <div className="space-y-3">
                  {dummyReport.strengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100 transition-all hover:border-green-200 hover:shadow-sm">
                      <span className="text-green-500 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span className="text-gray-700 flex-1">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100">
                <p className="text-sm text-gray-600 italic flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">ℹ️</span>
                  {dummyReport.note}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-gray-50 border-t">
              <button
                onClick={() => setShowReport(false)}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default FreeAuditCard;