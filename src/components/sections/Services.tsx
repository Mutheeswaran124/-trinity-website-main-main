import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Section from '../ui /Section';
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

interface ServicesProps {
  onServiceClick: (serviceTitle: string) => void;
}

// DirectionAwareHover component integrated directly
interface DirectionAwareHoverProps {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const DirectionAwareHover: React.FC<DirectionAwareHoverProps> = ({
  imageUrl,
  children,
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  const getDirection = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const centerX = width / 2;
    const centerY = height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return deltaX > 0 ? 'right' : 'left';
    } else {
      return deltaY > 0 ? 'bottom' : 'top';
    }
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const dir = getDirection(e);
    setDirection(dir);
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const dir = getDirection(e);
    setDirection(dir);
    setIsHovered(false);
  };

  const getOverlayTransform = () => {
    if (!isHovered) {
      switch (direction) {
        case 'top': return 'translateY(-100%)';
        case 'bottom': return 'translateY(100%)';
        case 'left': return 'translateX(-100%)';
        case 'right': return 'translateX(100%)';
        default: return 'translateY(-100%)';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl group cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
      
      {/* Content Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 transition-transform duration-300 ease-out"
        style={{ transform: getOverlayTransform() }}
      >
        {children}
      </div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
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
    try {
      // Call the parent callback first
      onServiceClick(service.title);
      
      // Navigate to the detailed service page
      navigate(`/services/${service.route}`);
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback navigation
      window.location.href = `/services/${service.route}`;
    }
  };

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Comprehensive solutions tailored to your data-driven growth"
      className="bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
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
                  <DirectionAwareHover 
                    imageUrl={service.imageUrl} 
                    className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                    onClick={() => handleServiceClick(service)}
                  >
                    <ServiceCard service={service} />
                  </DirectionAwareHover>
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
              <DirectionAwareHover
                key={service.title}
                imageUrl={service.imageUrl}
                className="h-48 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handleServiceClick(service)}
              >
                <ServiceCard service={service} />
              </DirectionAwareHover>
            ))}
          </div>
        </div>
    
    </Section>
  );
};

interface ServiceCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="p-6 flex flex-col items-center text-center h-full justify-center group">
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
);

export default Services;