import React, { useState, useMemo } from 'react';
import { Globe } from 'lucide-react';

import texasImg from '../../Assets/texas.jpg'; 
import chennaiImg from '../../Assets/chennai.jpg';
import hagueImg from '../../Assets/hague.jpg';
import muscatImg from '../../Assets/muscat oman.jpg';

interface TimelinePoint {
  id: string;
  establishedYear: string;
  city: string;
  country: string;
  isActive: boolean;
  flag: string;
  backgroundImage?: string;
}

interface TimelineProps {
  points: TimelinePoint[];
  onPointClick?: (point: TimelinePoint) => void;
}

const Timeline: React.FC<TimelineProps> = ({ points, onPointClick }) => {
  return (
    <div className="relative w-full bg-white/90 backdrop-blur-xl rounded-xl border border-gray-200 p-6 shadow-lg mb-8">
      <div className="relative">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-blue-500 to-gray-300"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((point) => (
            <div key={point.id} className="relative">
              <div className="flex justify-center mb-4">
                <div
                  className={`relative w-3 h-3 rounded-full border-3 border-white cursor-pointer transition-all duration-300 transform hover:scale-125 shadow-lg ${
                    point.isActive
                      ? 'bg-blue-500 shadow-blue-500/50'
                      : 'bg-gray-400 hover:bg-blue-500'
                  }`}
                  onClick={() => onPointClick && onPointClick(point)}
                >
                  {point.isActive && (
                    <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  )}
                </div>
              </div>
              <div
                className={`relative overflow-hidden rounded-lg border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  point.isActive
                    ? 'border-blue-300 shadow-lg shadow-blue-500/20'
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/10'
                }`}
                onClick={() => onPointClick && onPointClick(point)}
              >
                <div className="relative h-24 overflow-hidden">
                  {point.backgroundImage && (
                    <img
                      src={point.backgroundImage}
                      alt={`${point.country} background`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 image-hd"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent">
                    <div className="flex items-end justify-center h-full space-x-1 px-3">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-white/30 rounded-t backdrop-blur-sm"
                          style={{ width: '4px', height: `${Math.random() * 12 + 8}px` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  {point.isActive && (
                    <div className="absolute top-2 right-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                    </div>
                  )}
                </div>
                <div className={`p-3 transition-all duration-500 ${
                  point.isActive ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-white hover:bg-blue-50/50'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{point.city}</h3>
                    <span className="text-lg filter drop-shadow-sm">{point.flag}</span>
                  </div>
                  <p className="text-gray-600 text-xs mb-2">{point.country}</p>
                  {point.isActive && (
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-blue-600 font-medium">Active</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GlobalPresence = () => {
  const [activeLocation, setActiveLocation] = useState('chennai');

  const locations = useMemo(() => ([
    {
      id: 'usa',
      name: 'United States',
      city: 'Plano, Texas',
      establishedYear: '2020',
      address: '300 Interpace Parkway, Plano, TX',
      coordinates: { lat: 33.019843, lng: -96.698885 },
      employees: '50+',
      services: ['Cloud Solutions', 'AI Development', 'Cybersecurity'],
      timezone: 'CST',
      description: 'Our flagship headquarters driving innovation in cloud technologies and AI solutions.',
      specialization: 'Enterprise Solutions',
      flag: '🇺🇸',
      backgroundImage: texasImg,
    },
    {
      id: 'chennai',
      name: 'India',
      city: 'Chennai, Tamil Nadu',
      establishedYear: '2021',
      address: 'Ambal Nagar, Ekkatuthangal, Chennai - 600044, Tamil Nadu',
      coordinates: { lat: 13.08268, lng: 80.270718 },
      employees: '50+',
      services: ['Software Development', 'Data Analytics', 'Mobile Apps'],
      timezone: 'IST',
      description: 'Our largest development center focusing on cutting-edge software solutions.',
      specialization: 'Development Hub',
      flag: '🇮🇳',
      backgroundImage: chennaiImg,
    },
    {
      id: 'oman',
      name: 'Oman',
      city: 'Muscat',
      establishedYear: '2022',
      address: 'Muscat, Oman',
      coordinates: { lat: 23.58589, lng: 58.40592 },
      employees: '50+',
      services: ['Digital Transformation', 'IT Consulting', 'Support'],
      timezone: 'GST',
      description: 'Strategic Middle East operations center providing regional expertise.',
      specialization: 'Consulting Services',
      flag: '🇴🇲',
      backgroundImage: muscatImg,
    },
    {
      id: 'netherlands',
      name: 'Netherlands',
      city: 'The Hague',
      establishedYear: '2023',
      address: 'The Hague, Netherlands',
      coordinates: { lat: 52.0704978, lng: 4.3006999 },
      employees: '50+',
      services: ['Fintech Solutions', 'Blockchain', 'IoT Development'],
      timezone: 'CET',
      description: 'European innovation center specializing in financial technology.',
      specialization: 'Fintech Innovation',
      flag: '🇳🇱',
      backgroundImage: hagueImg,
    },
  ]), []);

  const timelinePoints = useMemo(() => {
    return locations.map(l => ({
      id: l.id,
      establishedYear: l.establishedYear,
      city: l.city,
      country: l.name,
      isActive: l.id === activeLocation,
      flag: l.flag,
      backgroundImage: l.backgroundImage
    }));
  }, [activeLocation, locations]);


  const handleTimelineClick = (point: TimelinePoint) => {
    if (point.id) {
      setActiveLocation(point.id);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-100/40 to-indigo-100/40 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 pt-12 pb-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <Globe className="text-blue-600 mr-4 animate-spin-slow" size={40} />
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Global <span className="text-blue-600">Network</span>
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Powering digital transformation across four continents with cutting-edge technology
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Timeline points={timelinePoints} onPointClick={handleTimelineClick} />
        {/* Additional content omitted for brevity */}
      </div>
    </div>
  );
};

export default GlobalPresence;
