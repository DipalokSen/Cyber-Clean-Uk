"use client"
import React, { useEffect, useState } from 'react';
import { Shield, CheckCircle, FileText, Users, Wifi, Lock, Server, Headphones, ChevronRight, Check} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CyberCleanLogo } from '@/Components/CyberCleanLogo';
import Image from 'next/image';
export default function CyberCleanLanding() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const testimonials = [
    {
      name: "Secured by Alison Marie, B&B",
      location: "York Boutique House",
      text: "Guest Wi-Fi and smart locks secured. CyberClean spotted vulnerabilities I had no idea existed. My guests feel safer, and so do I."
    },
    {
      name: "GDPR-friendly practices",
      location: "Monthly digital hygiene - fewer risks, happier guests",
      text: "As a small hotel owner, I was overwhelmed by GDPR requirements. CyberClean made it simple and affordable. Their monthly check-ups give me peace of mind."
    },
    {
      name: "Protected by CyberClean",
      location: "Airbnb Host, Edinburgh",
      text: "CyberClean is fab. Low-cost cybersecurity designed for B&Bs and rentals. An affordable way to avoid costly headaches. They fixed my router issues in minutes!"
    },
    {
      name: "Sarah Thompson",
      location: "Boutique Hotel Manager",
      text: "The team spotted phishing attempts targeting our booking system. Their proactive approach saved us from a potential disaster. Worth every penny!"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <div className="min-h-screen bg-white overflow-x-hidden">
        
        

{/* Hero Section */}
   <section className="relative bg-[#47348D] text-white overflow-hidden">
  <div className="container mx-auto px-4 py-16 md:py-24">
    <h1 className='mb-6'>Cyber Clean</h1>
    
    <div className="max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        Digital Hygiene for<br />
        Boutique Hotels<br />
        & Airbnb Hosts
      </h1>
      <p className="text-lg md:text-xl mb-8 text-purple-100 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        Protect your guests. Secure your Wi-Fi. Clean up<br />
        your digital presence—without the tech stress.
      </p>
     
      <button 
        onClick={() => router.push('/Audit')}
        className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up" 
        style={{ animationDelay: '0.5s' }}
      >
        Get a Free Cyber Hygiene Audit
      </button>
    </div>
  </div>
  
  {/* Circular Logo positioned closer to the left */}
  <div className="absolute right-20 md:right-32 lg:right-48 top-1/2 transform -translate-y-1/2 hidden md:block  ">
    <div className="bg-white/10 backdrop-blur-lg rounded-full p-4  animate-float shadow-[0px_0px_55px_6px_rgba(0,0,0,0.65)]">
      {/* Circular logo container */}
      <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-[#47348D] shadow-inner ">
        <Image 
          src="/images/Logo Comp.png" 
          width={280} 
          height={250} 
          alt="Cyber Clean Logo" 
          className="w-full h-full object-contain p-4"
        />
      </div>
    </div>
  </div>
</section>

        {/* How CyberClean Works */}
       <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 id="works-section" className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 animate-on-scroll opacity-0 transition-all duration-1000"
        style={{ transform: isVisible['works-section'] ? 'translateY(0)' : 'translateY(20px)', opacity: isVisible['works-section'] ? 1 : 0 }}>
      How CyberClean Works
    </h2>
    <div className="flex flex-wrap -mx-4">
      {[
        { 
          icon: Users, 
          title: "Free Audit", 
          desc: "We check your setup meticulously— Wi-Fi, email devices, staff practices.", 
          url: "/FreeAuditC",
          color: "from-purple-500 to-pink-500",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          detail: "15 minute assessment"
        },
        { 
          icon: FileText, 
          title: "Clear Report", 
          desc: "You receive a PDF report with 3 things wrong & 3 things right—no endless jargon.", 
          url: "/ClearReport",
          color: "from-blue-500 to-cyan-500",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          detail: "Delivered in 24 hours"
        },
        { 
          icon: Shield, 
          title: "Clean-Up Plan", 
          desc: "We help you apply the hotfixes and keep your business safe every month.", 
          url: "/cleanup-plan",
          color: "from-green-500 to-teal-500",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          detail: "Monthly protection"
        },
        { 
          icon: Headphones, 
          title: "Ongoing Support", 
          desc: "No re-port fee, keep at tech—Text, Chat, simple digital hygiene—delivered monthly.", 
          url: "/ongoing-support",
          color: "from-orange-500 to-red-500",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          detail: "24/7 assistance"
        }
      ].map((item, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          
            <div
              id={`work-card-${index}`}
              className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-on-scroll opacity-0 h-full cursor-pointer group overflow-hidden"
             
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                transform: isVisible[`work-card-${index}`] ? 'translateY(0)' : 'translateY(30px)', 
                opacity: isVisible[`work-card-${index}`] ? 1 : 0,
                transition: `all 0.8s ease-out ${index * 0.1}s`
              }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-[2px] bg-white rounded-2xl" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`${item.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <item.icon className={`w-8 h-8 ${item.iconColor} transition-transform duration-300`} />
                  </div>
                  {/* Floating accent */}
                  <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r ${item.color} rounded-full opacity-70 animate-pulse`} />
                </div>
                
                {/* Title with gradient on hover */}
                <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                
                {/* Detail badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${item.iconColor} ${item.iconBg} px-3 py-1 rounded-full`}>
                    {item.detail}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400 transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-purple-600" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
            </div>
          
        </div>
      ))}
    </div>
    
  </div>
</section>

        {/* Monthly Service Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 id="plans-section" className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 animate-on-scroll opacity-0 transition-all duration-1000"
                style={{ transform: isVisible['plans-section'] ? 'translateY(0)' : 'translateY(20px)', opacity: isVisible['plans-section'] ? 1 : 0 }}>
              Our Monthly Service Plans
            </h2>
            <div className="flex flex-wrap -mx-4 justify-center">
              {[
                { 
                  name: "Cyber Refresh", 
                  price: "49", 
                  features: ["Wi-Fi audit", "Password check", "PDF risk report"],
                  highlight: false
                },
                { 
                  name: "Cyber Shield", 
                  price: "69", 
                  features: ["Everything in to Refresh", "Phishing test", "GDPR guidance"],
                  highlight: true
                },
                { 
                  name: "Cyber Guardian", 
                  price: "149", 
                  features: ["Everything in Shield", "Staff training templates", "24/7 support via live chat/phone attacks"],
                  highlight: false
                }
              ].map((plan, index) => (
                <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                  <div
                    id={`plan-card-${index}`}
                    className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-on-scroll opacity-0 h-full flex flex-col ${
                      plan.highlight ? 'border-2 border-purple-500' : 'border border-gray-200'
                    }`}
                    style={{ 
                      transform: isVisible[`plan-card-${index}`] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)', 
                      opacity: isVisible[`plan-card-${index}`] ? 1 : 0,
                      transition: `all 0.8s ease-out ${index * 0.15}s`
                    }}
                  >
                    <h3 className="text-xl font-bold text-purple-700 mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold mb-6">£ {plan.price}/mo</div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start opacity-0 animate-fade-in" style={{ animationDelay: `${(index * 0.15) + (fIndex * 0.1) + 0.5}s` }}>
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href={"/Audit"}>
              <button className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center group">
                Start With a Free Audit 
                <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              </Link>

            </div>
          </div>
        </section>

        {/* Client Testimonials and About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Client Testimonials */}
              <div className="lg:w-2/3">
                <h2 id="testimonials-section" className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 animate-on-scroll opacity-0 transition-all duration-1000"
                    style={{ transform: isVisible['testimonials-section'] ? 'translateY(0)' : 'translateY(20px)', opacity: isVisible['testimonials-section'] ? 1 : 0 }}>
                  Client Testimonials
                </h2>
                <div className="overflow-x-auto pb-4 scrollbar-hide">
                  <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-sm p-6 w-80 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                      >
                        <div className="flex items-start mb-4">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 animate-pulse" />
                          <div>
                            <p className="font-semibold text-gray-800">{testimonial.name}</p>
                            <p className="text-sm text-gray-600">{testimonial.location}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 italic">"{testimonial.text}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* About CyberClean */}
              <div className="lg:w-1/3">
                <h2 id="about-section" className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 animate-on-scroll opacity-0 transition-all duration-1000"
                    style={{ transform: isVisible['about-section'] ? 'translateY(0)' : 'translateY(20px)', opacity: isVisible['about-section'] ? 1 : 0 }}>
                  About CyberClean
                </h2>
                <div id="about-card" className="bg-white rounded-lg shadow-sm p-6 animate-on-scroll opacity-0 transition-all duration-1000"
                     style={{ transform: isVisible['about-card'] ? 'translateY(0)' : 'translateY(30px)', opacity: isVisible['about-card'] ? 1 : 0 }}>
                  <p className="text-gray-700 mb-6">
                    CyberClean is a UK-based cybersecurity service designed specifically for B&Bs, boutique hotels, and short-term rentals.
                  </p>
                  <p className="text-gray-700 mb-6">
                    We help hospitality professionals protect their guests and businesses with simple, affordable cybersecurity solutions.
                  </p>
                  <p className="text-gray-700">
                    Among Hotels, Services, Rentals and Cafés, we provide tailored security solutions that address your unique needs effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 animate-fade-in">
                <p className="text-sm">CyberClean © 2025</p>
              </div>
              <div className="flex space-x-6 mb-4 md:mb-0">
             <Link href={"/PrivacyPolicy"}className="text-sm hover:text-purple-400 transition-colors duration-300 hover:scale-110 inline-block">Privacy Policy & Terms</Link>
                {/* <a href="#" className="text-sm hover:text-purple-400 transition-colors duration-300 hover:scale-110 inline-block">Terms</a> */}
                <a href="#" className="text-sm hover:text-purple-400 transition-colors duration-300 hover:scale-110 inline-block">Contact Us @ <span className='text-purple-500'>debobroto@cybercleantech.com</span></a>
              </div>
             <Link href={"/Audit"}>
            
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Book my Free Audit
              </button>
               </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}