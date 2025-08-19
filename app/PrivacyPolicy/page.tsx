"use client"
import { useState } from 'react';
import { Check } from 'lucide-react';

export default function PrivacyPolicyComponent() {
  const [activeTab, setActiveTab] = useState('privacy');
  const [activeSection, setActiveSection] = useState('who-we-are');

  const privacySidebarItems = [
    { id: 'who-we-are', label: 'Who we are' },
    { id: 'contact', label: 'Contact' },
    { id: 'information-we-collect', label: 'Information we collect' },
    { id: 'how-we-use-information', label: 'How we use information' },
    { id: 'sharing-your-data', label: 'Sharing your data' },
    { id: 'data-retention', label: 'Data retention' },
    { id: 'your-rights', label: 'Your rights' },
    { id: 'security', label: 'Security' },
    { id: 'updates', label: 'Updates' }
  ];

  const termsSidebarItems = [
    { id: 'services', label: '1. Services' },
    { id: 'payments', label: '2. Payments' },
    { id: 'fair-use', label: '3. Fair use' },
    { id: 'no-guarantee', label: '4. No guarantee' },
    { id: 'liability', label: '5. Liability' },
    { id: 'company-info', label: '6. Company information' },
    { id: 'governing-law', label: '7. Governing law' }
  ];

  const currentSidebarItems = activeTab === 'privacy' ? privacySidebarItems : termsSidebarItems;

  const renderContent = () => {
    if (activeTab === 'privacy') {
      switch (activeSection) {
        case 'who-we-are':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Who we are</h2>
              <p className="text-gray-700 leading-relaxed">
                CyberClean Digital Hygiene Ltd is a UK-registered company providing monthly digital hygiene and cybersecurity services to small hospitality businesses such as Airbnb hosts, boutique hotels, and guesthouses.
              </p>
            </div>
          );
        case 'contact':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact</h2>
              <div className="space-y-2">
                <p className="text-gray-700">Email: debobroto@cybercleantech.com</p>
                <p className="text-gray-700">Phone: +44 7424785987</p>
              </div>
            </div>
          );
        case 'information-we-collect':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Information we collect</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Name, email, phone number, and business/property details provided when you contact us or sign up for services.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Payment details processed securely by Stripe (we never see or store full card numbers).
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Basic website analytics (cookies, IP, device info).
                  </p>
                </div>
              </div>
            </div>
          );
        case 'how-we-use-information':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">How we use information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver our services (audits, reports, subscriptions).
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    To communicate with you (support, billing, updates).
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    To meet legal and tax obligations.
                  </p>
                </div>
              </div>
            </div>
          );
        case 'sharing-your-data':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sharing your data</h2>
              <p className="text-gray-700 leading-relaxed">
                We only share information with trusted providers (Stripe, email/CRM tools) to deliver services. We do not sell your personal data.
              </p>
            </div>
          );
        case 'data-retention':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Data retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your information for as long as needed to provide services and meet legal requirements.
              </p>
            </div>
          );
        case 'your-rights':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your rights</h2>
              <p className="text-gray-700 leading-relaxed">
                Under UK GDPR, you can request access, correction, erasure, restriction, objection, or data portability. Contact us at debobroto@cybercleantech.com.
              </p>
            </div>
          );
        case 'security':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We use encryption, secure access, and industry best practices to protect your data.
              </p>
            </div>
          );
        case 'updates':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy. Last updated: 19/08/2025.
              </p>
            </div>
          );
        default:
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Please select a section from the sidebar to view the content.
              </p>
            </div>
          );
      }
    } else {
      // Terms & Conditions content
      switch (activeSection) {
        case 'services':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Services</h2>
              <p className="text-gray-700 leading-relaxed">
                CyberClean Digital Hygiene Ltd provides digital hygiene audits, cybersecurity reports, and monthly subscription services as described on www.cybercleantech.com.
              </p>
            </div>
          );
        case 'payments':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Payments</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Subscriptions are billed monthly in advance through Stripe.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    You may cancel anytime; your plan will continue until the end of the paid period.
                  </p>
                </div>
              </div>
            </div>
          );
        case 'fair-use':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Fair use</h2>
              <p className="text-gray-700 leading-relaxed">
                Support is provided for reasonable usage by the subscribed property or business.
              </p>
            </div>
          );
        case 'no-guarantee':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. No guarantee</h2>
              <p className="text-gray-700 leading-relaxed">
                We use best efforts but cannot guarantee prevention of all cyber incidents, breaches, or downtime.
              </p>
            </div>
          );
        case 'liability':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Our liability is limited to the total subscription fees paid by you in the 3 months preceding a claim, to the maximum extent permitted by law.
              </p>
            </div>
          );
        case 'company-info':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Company information</h2>
              <div className="space-y-2">
                <p className="text-gray-700">CyberClean Digital Hygiene Ltd</p>
                <p className="text-gray-700">Registered in England & Wales</p>
                <p className="text-gray-700">Contact: debobroto@cybercleantech.com</p>
              </div>
            </div>
          );
        case 'governing-law':
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Governing law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms are governed by the laws of England and Wales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Last updated: 19/08/2025.
              </p>
            </div>
          );
        default:
          return (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Terms & Conditions</h2>
              <p className="text-gray-700 leading-relaxed">
                Please select a section from the sidebar to view the content.
              </p>
            </div>
          );
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-cyan-400 rounded p-1">
              <Check className="w-6 h-6 text-slate-800" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Privacy Policy<br />& Terms of Service
              </h1>
              <p className="text-slate-300 text-lg">
                Your trust and security are our top priority.
              </p>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-0">
            <button
              onClick={() => {
                setActiveTab('privacy');
                setActiveSection('who-we-are');
              }}
              className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
                activeTab === 'privacy'
                  ? 'bg-cyan-100 text-slate-800'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                setActiveTab('terms');
                setActiveSection('services');
              }}
              className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
                activeTab === 'terms'
                  ? 'bg-cyan-100 text-slate-800'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <nav className="space-y-1">
              {currentSidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-cyan-50 text-slate-800 border-l-4 border-cyan-400'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white rounded-lg p-8 shadow-sm">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}