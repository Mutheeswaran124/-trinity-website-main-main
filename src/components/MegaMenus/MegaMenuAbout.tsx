"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Building, TrendingUp, ArrowRight } from 'lucide-react';

const partners = [
  { name: 'AWS', href: '#aws', logo: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png' },
  { name: 'Odoo', href: '#odoo', logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/640/odoo_logo_rgb-512.png' },
  { name: 'Databricks', href: '#databricks', logo: 'https://images.seeklogo.com/logo-png/61/1/databricks-icon-logo-png_seeklogo-611588.png' },
  { name: 'Azure', href: '#azure', logo: 'https://www.svgrepo.com/show/303372/azure-1-logo.svg' },
  { name: 'Fivetran', href: '#fivetran', logo: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png' },
  { name: 'dbt Labs', href: '#dbt', logo: 'https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png' },
];

const highlights = [
  {
    number: '50+',
    label: 'Projects Delivered',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    textColor: 'text-white',
  },
  {
    number: '5+ Years',
    label: 'Experience',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    textColor: 'text-white',
  },
  {
    number: '4+',
    label: 'Countries Served',
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
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 max-w-7xl mx-auto mt-[-30px]">
      <div className="grid grid-cols-9 gap-8">
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
              Why Trinity Technology <span className="text-blue-600">Solutions?</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering businesses with cutting-edge <span className="font-semibold text-blue-600">data engineering, analytics, and AI solutions</span>.
            </p>
          </motion.div>
         
          <div className="space-y-3">
            {[
              { icon: Target, text: 'Founded in 2020', color: 'bg-emerald-500' },
              { icon: Award, text: 'Databricks Official Partner', color: 'bg-purple-500' },
              { icon: Building, text: 'Global Presence in 4+ Continent', color: 'bg-blue-500' }
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

        {/* Center Section - Technology Partners */}
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

        {/* Call-to-Action */}
        <div className="col-span-9 flex justify-center mt-8">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group"
          >
            <div className="relative z-10 flex items-center space-x-3">
              <span>Learn More About Us</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shimmer effect */}
   <motion.div
  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
  animate={{ x: ['-100%', '100%'] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: 'linear',
  }}
/>



          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuAbout;