import React from 'react';
import { Cloud, Database, Globe, Server, ArrowRight, CheckCircle, Zap, Box, Code, Layers } from 'lucide-react';


const MegaMenuTechStack = ({ onClose }: { onClose?: () => void }) => {
  const handleExploreClick = () => {
    const section = document.getElementById('tech-stack');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (onClose) onClose(); // Close dropdown if parent passes onClose
    }
  };


  const techCategories = [
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      technologies: [
        { name: 'Azure', icon: Cloud, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', icon: Server, color: 'from-orange-500 to-orange-600' },
        { name: 'Databricks', icon: Database, color: 'from-red-500 to-red-600' },
        { name: 'Odoo', icon: Box, color: 'from-purple-500 to-purple-600' }
      ],
    },
    {
      title: 'Data & Integration',
      icon: Database,
      technologies: [
        { name: 'DBT', icon: Layers, color: 'from-green-500 to-green-600' },
        { name: 'FiveTran', icon: Zap, color: 'from-blue-600 to-blue-700' }
      ],
    },
    {
      title: 'Web & Frameworks',
      icon: Globe,
      technologies: [
        { name: 'Next.js', icon: Code, color: 'from-gray-800 to-black' },
        { name: 'React', icon: Globe, color: 'from-cyan-500 to-cyan-600' }
      ],
    }
  ];


  return (
    <div className="relative grid grid-cols-12 gap-6 p-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl shadow-black/5">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 rounded-3xl pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>


      {/* Left Navigation */}
      <div className="col-span-4 relative z-10">
        <div className="mb-6">
          <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 uppercase tracking-wider">Tech Stack</h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <div className="space-y-4">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{category.title}</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="group/tech relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl border border-white/40 hover:border-white/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5"
                    style={{ animationDelay: `${(index * 100) + (techIndex * 50)}ms` }}
                  >
                    <div className="flex items-center space-x-3 p-3">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-lg blur-sm opacity-20 group-hover/tech:opacity-40 transition-opacity duration-300`}></div>
                        <div className={`relative p-1.5 bg-gradient-to-br ${tech.color} rounded-lg`}>
                          <tech.icon className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <span className="text-xs font-medium text-gray-700 group-hover/tech:text-gray-900 transition-colors duration-300">{tech.name}</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Center Content */}
      <div className="col-span-5 px-6 relative z-10">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-3">Technology Expertise</h2>
          <p className="text-gray-600/90 leading-relaxed text-lg">Building modern applications with cutting-edge frameworks & cloud solutions.</p>
        </div>
       
        <div className="relative mb-6 overflow-hidden rounded-2xl group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
          <img
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Tech Stack"
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
        </div>
       
        <div className="grid grid-cols-2 gap-4 mb-8">
          {['Scalable Architecture', 'Performance Optimization', 'Security Compliance', 'Cross-platform Compatibility'].map((feature, index) => (
            <div
              key={feature}
              className="flex items-center space-x-3 p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/70 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md"></div>
                <CheckCircle className="relative h-5 w-5 text-green-500" />
              </div>
              <span className="text-sm font-medium text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
       
        <div className="flex items-center justify-between">
          <button
            className="group relative inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            onClick={handleExploreClick}
            type="button"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Explore Tech Stack</span>
            <ArrowRight className="relative h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-sm"></div>
              <CheckCircle className="relative h-5 w-5 text-yellow-500" />
            </div>
            <span className="text-sm font-semibold text-yellow-700">Latest Technologies</span>
          </div>
        </div>
      </div>


      {/* Right Sidebar */}
      <div className="col-span-3 space-y-6 relative z-10">
        <div className="relative p-6 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl shadow-black/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-t-2xl"></div>
          <h3 className="text-sm font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
            Certifications
          </h3>
          <div className="space-y-4">
            {[
              { name: 'AWS Certified', icon: Server, color: 'from-orange-500 to-orange-600' },
              { name: 'Google Cloud Professional', icon: Cloud, color: 'from-blue-500 to-blue-600' },
              { name: 'Microsoft Azure Expert', icon: Cloud, color: 'from-blue-600 to-blue-700' },
         
            ].map((cert, index) => (
              <div
                key={cert.name}
                className="group/cert flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/40 hover:bg-white/90 hover:border-white/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-xl blur-lg opacity-20 group-hover/cert:opacity-40 transition-opacity duration-300`}></div>
                  <div className={`relative p-2.5 bg-gradient-to-br ${cert.color} rounded-xl`}>
                    <cert.icon className="h-4 w-4 text-white" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900 group-hover/cert:text-blue-700 transition-colors duration-300">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>


        <div className="relative p-6 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl shadow-black/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-green-500 rounded-t-2xl"></div>
          <h4 className="text-sm font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-teal-500 rounded-full mr-4"></div>
            Tech Stats
          </h4>
          <div className="space-y-4">
            {[
              { label: 'Languages', value: '15+' },
              { label: 'Frameworks', value: '25+' },
              { label: 'Cloud Platforms', value: '5+' },
              { label: 'Years of Experience', value: '10+' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="flex justify-between items-center p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/80 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-sm font-medium text-gray-600">{stat.label}</span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-lg">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default MegaMenuTechStack;

