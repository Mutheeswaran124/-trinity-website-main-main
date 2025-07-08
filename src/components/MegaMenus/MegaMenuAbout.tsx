"use client";

import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Building, TrendingUp, Linkedin, ExternalLink, UserPlus } from 'lucide-react';

const partners = [
  { name: 'AWS', href: '#aws', logo: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png' },
  { name: 'Azure', href: '#azure', logo: 'https://www.svgrepo.com/show/303372/azure-1-logo.svg' },
  { name: 'Databricks', href: '#databricks', logo: 'https://images.seeklogo.com/logo-png/61/1/databricks-icon-logo-png_seeklogo-611588.png' },
  { name: 'L&T', href: '#lt', logo: 'https://i.pinimg.com/736x/6d/40/8f/6d408fbeb3e7409c124688364f0b4b42.jpg'}
];

const highlights = [
  {
    number: '100+',
    label: 'Projects Delivered',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    textColor: 'text-white',
  },
  {
    number: '25+ Years',
    label: 'Experience',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    textColor: 'text-white',
  },
  {
    number: '100+ Years',
    label: 'Combined Experience',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    textColor: 'text-white',
  },
  {
    number: '50+',
    label: 'Data Experts',
    icon: Award,
    image: 'https://www.shutterstock.com/image-photo/analyst-working-business-analytics-data-600nw-1857484450.jpg',
    textColor: 'text-white',
  },
];

const MegaMenuAbout = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/trinity-technology-solutions/posts/?feedView=all', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 max-w-7xl mx-auto mt-[-30px]">
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10">
          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-3"
            >
              <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
                About Trinity
              </span>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                Why Trinity <span className="text-blue-600">Solutions?</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Because we don't just deliver services — we solve real problems. 
                We bring together people, process, and purpose to create tech that works, scales, and drives impact.
              </p>
            </motion.div>

            {/* Company Features */}
            <div className="space-y-3">
              {[
                { icon: Target, text: 'Global Presence in 4+ Continent', color: 'bg-emerald-500' },
                { icon: Award, text: 'Data-smart. AI-driven. Human-focused', color: 'bg-purple-500' },
                { icon: Building, text: 'Proven track record from staffing to software to enterprise AI', color: 'bg-blue-500' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl"
                >
                  <div className={`p-2 rounded-lg ${item.color}`}>
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 flex-1">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Technology Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm"
            >
              <div className="mb-4">
                <span className="text-purple-600 text-sm font-semibold tracking-wide uppercase">
                  Technology Partners
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">Trusted Partnerships</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {partners.map((partner, index) => (
                  <motion.a
                    key={partner.name}
                    href={partner.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-5 w-5 object-contain" 
                    />
                    <span className="text-xs font-medium text-gray-700">
                      {partner.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Impact Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm"
            >
              <div className="mb-4">
                <span className="text-emerald-600 text-sm font-semibold tracking-wide uppercase">
                  Our Impact
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">Measurable Results</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="relative overflow-hidden rounded-xl min-h-[100px] cursor-pointer transition-all duration-300 group"
                    style={{
                      backgroundImage: `url('${highlight.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
                    <div className="relative z-10 p-3 h-full flex flex-col justify-end">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="p-1 bg-white/20 backdrop-blur-sm rounded-lg">
                          <highlight.icon className="h-3 w-3 text-white" />
                        </div>
                        <div className="text-lg font-bold text-white">{highlight.number}</div>
                      </div>
                      <p className="text-xs font-semibold text-white/90">{highlight.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* LinkedIn Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm"
            >
              <div className="mb-4">
                <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
                  Connect With Us
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">Stay Connected</h3>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={handleLinkedInClick}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-4 cursor-pointer group transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        <Linkedin className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">Follow us on LinkedIn</h4>
                        <p className="text-blue-100 text-xs">Join our professional network</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/70" />
                  </div>
                  
                  <div className="flex items-center space-x-4 text-xs text-blue-100">
                    <div className="flex items-center space-x-1">
                      <UserPlus className="h-3 w-3" />
                      <span>Trinity Technology Solutions</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-3 w-3" />
                      <span>Global Network</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 inline-flex items-center space-x-2 text-white font-medium text-sm">
                    <span>Connect Now</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-9 gap-8">
            {/* Left Section - Company Overview */}
            <div className="col-span-3 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
                  About Trinity
                </span>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  Why Trinity <span className="text-blue-600">Solutions?</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Because we don't just deliver services — we solve real problems. 
                  We bring together people, process, and purpose to create tech that works, scales, and drives impact. 
                  <span className="font-semibold text-blue-600"> Data-smart. AI-driven. Human-focused.</span> 
                  Trusted across 4 countries.Agile like a startup, reliable like an enterprise. 
                  In a world full of vendors, we're your partner in progress.
                </p>
              </motion.div>
             
              <div className="space-y-3">
                {[
                  { icon: Target, text: 'Global Presence in 4+ Continent', color: 'bg-emerald-500' },
                  { icon: Award, text: 'Data-smart. AI-driven. Human-focused', color: 'bg-purple-500' },
                  { icon: Building, text: 'Proven track record from staffing to software to enterprise AI', color: 'bg-blue-500' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`p-2 rounded-lg group-hover:scale-110 transition-transform ${item.color}`}>
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Center Section - Technology Partners & LinkedIn */}
            <div className="col-span-3 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <span className="text-purple-600 text-sm font-semibold tracking-wide uppercase">
                  Technology Partners
                </span>
                <h3 className="text-xl font-bold text-gray-900">Trusted Partnerships</h3>
              </motion.div>
             
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 gap-3"
              >
                {partners.map((partner, index) => (
                  <motion.a
                    key={partner.name}
                    href={partner.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-purple-200 group"
                  >
                    <div className="relative">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {partner.name}
                    </span>
                  </motion.a>
                ))}
              </motion.div>

              {/* LinkedIn Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 space-y-4"
              >
                <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
                  Connect With Us
                </span>
                <h3 className="text-xl font-bold text-gray-900">Stay Connected</h3>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  onClick={handleLinkedInClick}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 cursor-pointer group transition-all duration-300 hover:shadow-xl"
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white/30 transition-colors">
                          <Linkedin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">Follow us on LinkedIn</h4>
                          <p className="text-blue-100 text-sm">Join our professional network</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-blue-100">
                      <div className="flex items-center space-x-1">
                        <UserPlus className="h-4 w-4" />
                        <span>Trinity Technology Solutions</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Globe className="h-4 w-4" />
                        <span>Global Network</span>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="mt-4 inline-flex items-center space-x-2 text-white font-medium group-hover:text-blue-50 transition-colors"
                    >
                      <span>Connect Now</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Section - Impact Metrics */}
            <div className="col-span-3 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <span className="text-emerald-600 text-sm font-semibold tracking-wide uppercase">
                  Our Impact
                </span>
                <h3 className="text-xl font-bold text-gray-900">Measurable Results</h3>
              </motion.div>
             
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-xl min-h-[120px] cursor-pointer transition-all duration-300 group"
                    style={{
                      backgroundImage: `url('${highlight.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-300" />
                   
                    {/* Content */}
                    <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white/30 transition-colors">
                          <highlight.icon className="h-3 w-3 text-white" />
                        </div>
                        <div className="text-xl font-bold text-white">{highlight.number}</div>
                      </div>
                      <p className="text-xs font-semibold text-white/90">{highlight.label}</p>
                    </div>
                   
                    {/* Animated particles */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/30 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuAbout;