
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {
  LineChart,
  Database,
  ShieldCheck,
  BarChart,
  Cloud,
  BrainCircuit,
  Users,
  Briefcase,
} from 'lucide-react';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <LineChart size={32} className="text-white mb-1" />,
      title: 'Data Strategy',
      description: 'Crafting tailored data roadmaps to align with your business objectives.',
      imageUrl: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'data-strategy'
    },
    {
      icon: <Database size={32} className="text-white mb-1" />,
      title: 'Data Engineering',
      description: 'Building robust data infrastructures for smooth flow and processing.',
      imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'data-engineering'
    },
    {
      icon: <ShieldCheck size={32} className="text-white mb-1" />,
      title: 'Data Governance',
      description: 'Ensuring data quality, security, and compliance.',
      imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'data-governance'
    },
    {
      icon: <BarChart size={32} className="text-white mb-1" />,
      title: 'Business Intelligence',
      description: 'Transforming data into insights for decision-making.',
      imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'business-intelligence'
    },
    {
      icon: <Cloud size={32} className="text-white mb-1" />,
      title: 'Data Modernization',
      description: 'Upgrading systems for better performance and scalability.',
      imageUrl: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'cloud-migration'
    },
    {
      icon: <BrainCircuit size={32} className="text-white mb-1" />,
      title: 'AI Solutions',
      description: 'Applying AI to automate and reveal insights.',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'artificial-intelligence'
    },
    {
      icon: <Users size={32} className="text-white mb-1" />,
      title: 'Staffing Solutions',
      description: 'Providing data experts to extend your team.',
      imageUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'staffing-solutions'
    },
    {
      icon: <Briefcase size={32} className="text-white mb-1" />,
      title: 'ERP Planning',
      description: 'Integrating business processes for efficiency.',
      imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=640',
      route: 'erp-planning'
    },
  ];

  const handleServiceClick = (service: any) => {
    console.log(`Navigating to: /services/${service.route}`);
    navigate(`/services/${service.route}`);
  };

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive solutions tailored to your data-driven growth
          </p>
         
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 grid-rows-3 gap-6 max-w-6xl mx-auto min-h-[600px]">
            {/* Center Lottie Animation */}
            <div className="col-start-2 row-start-2 flex justify-center items-center z-10">
              <div className="relative">
                <DotLottieReact
                  src="https://lottie.host/abc637a9-8669-4167-9d37-f39faecbf35a/phzPSr5Ebn.lottie"
                  loop
                  autoplay
                  style={{ width: 200, height: 200 }}
                />
              </div>
            </div>

            {/* Service Cards */}
            {services.map((service, index) => {
              const positions = [
                { col: 1, row: 1 }, // Top Left
                { col: 2, row: 1 }, // Top Center
                { col: 3, row: 1 }, // Top Right
                { col: 1, row: 2 }, // Middle Left
                { col: 3, row: 2 }, // Middle Right
                { col: 1, row: 3 }, // Bottom Left
                { col: 2, row: 3 }, // Bottom Center
                { col: 3, row: 3 }, // Bottom Right
              ];
              
              const position = positions[index];
              
              return (
                <div 
                  key={service.title}
                  className={`col-start-${position.col} row-start-${position.row} h-56`}
                >
                  <div 
                    className="relative overflow-hidden rounded-xl group cursor-pointer h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => handleServiceClick(service)}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.imageUrl})` }}
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-6 flex flex-col items-center text-center h-full justify-center">
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mt-3 group-hover:text-blue-200 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-white/90 text-sm mt-2 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {service.description}
                        </p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                            <span className="text-white text-sm font-medium">Learn More →</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <DotLottieReact
                src="https://lottie.host/abc637a9-8669-4167-9d37-f39faecbf35a/phzPSr5Ebn.lottie"
                loop
                autoplay
                style={{ width: 140, height: 140 }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative overflow-hidden rounded-xl group cursor-pointer h-48 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => handleServiceClick(service)}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.imageUrl})` }}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-6 flex flex-col items-center text-center h-full justify-center">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mt-3 group-hover:text-blue-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm mt-2 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-white text-sm font-medium">Learn More →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
