"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, DollarSign, Users, Heart, ArrowRight, Star, Briefcase,
  ChevronDown, UserPlus, Building, Award, X,
  User, Mail, MessageSquare, Sparkles, TrendingUp, Clock,
  Globe
} from 'lucide-react';

const jobListings = [
  {
    title: 'Senior React Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $160k',
    level: 'Senior',
    href: '#job-1',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$110k - $140k',
    level: 'Mid-level',
    href: '#job-2',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Frontend Intern',
    location: 'San Francisco, CA',
    type: 'Internship',
    salary: '$25/hour',
    level: 'Entry',
    href: '#job-3',
    image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-emerald-500 to-teal-500'
  },
];

const companyStats = [
  { number: '50+', label: 'Team Members', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { number: '4.8/5', label: 'Employee Rating', icon: Star, color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
  { number: '95%', label: 'Retention Rate', icon: Heart, color: 'text-red-500', bgColor: 'bg-red-100' },
];

const companyPerks = {
  title: 'Why Join Us?',
  description: 'Work in a dynamic environment where innovation thrives and careers flourish!',
  image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  benefits: [
    { text: 'Health Insurance', icon: Heart },
    { text: '$3,000 Learning Budget', icon: Award },
    { text: 'Flexible Work Arrangements', icon: Globe },
    { text: 'Unlimited PTO', icon: Clock }
  ]
};

const quickStats = [
  { label: 'Average Hire Time', value: '2 weeks', color: 'text-blue-600', icon: Clock },
  { label: 'Career Growth Rate', value: '85%', color: 'text-emerald-600', icon: TrendingUp },
  { label: 'Remote Flexibility', value: '100%', color: 'text-purple-600', icon: Globe }
];

const MegaMenuCareers = () => {
  const [isJobSearchOpen, setIsJobSearchOpen] = useState(false);
  const [showChoosePathModal, setShowChoosePathModal] = useState(false);
  const [showJoinTeamModal, setShowJoinTeamModal] = useState(false);
  const [showApplyJobModal, setShowApplyJobModal] = useState(false);

  const toggleJobSearch = () => setIsJobSearchOpen(!isJobSearchOpen);
  const openChoosePathModal = () => setShowChoosePathModal(true);
  const closeAllModals = () => {
    setShowChoosePathModal(false);
    setShowJoinTeamModal(false);
    setShowApplyJobModal(false);
  };
  const openJoinTeamModal = () => {
    setShowJoinTeamModal(true);
    setShowChoosePathModal(false);
  };
  const openApplyJobModal = () => {
    setShowApplyJobModal(true);
    setShowChoosePathModal(false);
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 max-w-7xl mx-auto mt-[-30px]">
        <div className="relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 grid grid-cols-12 gap-8">
            {/* Job Listings */}
            <div className="col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <span className="text-orange-600 text-sm font-semibold tracking-wide uppercase">
                  Open Positions
                </span>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  Join Our <span className="text-orange-600">Team</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discover exciting opportunities to grow your career with <span className="font-semibold text-orange-600">innovative projects</span> and talented teams.
                </p>
              </motion.div>
             
              <div className="space-y-4">
                {jobListings.map((job, index) => (
                  <motion.a
                    key={job.title}
                    href={job.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-5 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 block"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src={job.image} 
                          alt={job.title} 
                          className="w-16 h-16 object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${job.color}`}></div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300 mb-2">
                          {job.title}
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" /> 
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <DollarSign className="h-4 w-4 mr-2 text-gray-400" /> 
                            {job.salary}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          job.level === 'Senior' ? 'text-blue-700 bg-blue-100' :
                          job.level === 'Mid-level' ? 'text-purple-700 bg-purple-100' :
                          'text-emerald-700 bg-emerald-100'
                        }`}>
                          {job.level}
                        </span>
                        <ArrowRight className="h-5 w-5 text-orange-600 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Company Perks & Stats */}
            <div className="col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
              >
                <div className="space-y-4">
                  <span className="text-red-600 text-sm font-semibold tracking-wide uppercase">
                    {companyPerks.title}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900">Company Culture</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{companyPerks.description}</p>
                </div>
               
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 my-6">
                  {companyStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="group text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex justify-center mb-3">
                        <div className={`p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300 ${stat.bgColor}`}>
                          <stat.icon className={`h-5 w-5 ${stat.color}`} />
                        </div>
                      </div>
                      <p className="text-lg font-bold text-gray-900 mb-1">{stat.number}</p>
                      <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative overflow-hidden rounded-xl mb-6 group"
                >
                  <img 
                    src={companyPerks.image} 
                    alt="Company Culture" 
                    className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-orange-600" />
                        <p className="text-sm font-semibold text-gray-800">Team Collaboration</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/60 rounded-full"
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
               
                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {companyPerks.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.text}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group flex items-center space-x-3 bg-gradient-to-r from-gray-50 to-white hover:from-orange-50 hover:to-red-50 p-3 rounded-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
                    >
                      <div className="p-1.5 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-900 group-hover:text-gray-800 transition-colors">
                        {benefit.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Find Job Section */}
            <div className="col-span-3 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
              >
                <div className="space-y-4">
                  <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
                    Get Started
                  </span>
                  <h4 className="text-xl font-bold text-gray-900">Find Your Role</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ready to make an impact? Explore opportunities with us and join our mission.
                  </p>
                </div>
               
                <div className="space-y-4 mt-6">
                  <motion.button
                    onClick={openChoosePathModal}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden w-full text-white bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    <div className="relative z-10 flex items-center justify-center space-x-2">
                      <Sparkles className="h-4 w-4" />
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-red-700 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                      animate={{ translateX: ['100%', '100%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "linear"
                      }}
                    />
                  </motion.button>

                  <motion.button
                    onClick={toggleJobSearch}
                    whileHover={{ scale: 1.02 }}
                    className="group w-full text-orange-600 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 py-4 px-6 rounded-xl font-semibold hover:from-orange-100 hover:to-red-100 hover:border-orange-300 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span>Explore Opportunities</span>
                    <motion.div
                      animate={{ rotate: isJobSearchOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="space-y-4">
                  <span className="text-purple-600 text-sm font-semibold tracking-wide uppercase">
                    Quick Facts
                  </span>
                  <h4 className="text-xl font-bold text-gray-900">Why Trinity?</h4>
                </div>
               
                <div className="space-y-4 mt-6">
                  {quickStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group flex justify-between items-center p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          {stat.label}
                        </span>
                      </div>
                      <span className={`font-bold text-lg group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {/* Choose Your Path Modal */}
        {showChoosePathModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Choose Your <span className="text-orange-600">Path</span>
                  </h2>
                  <button
                    onClick={closeAllModals}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <p className="text-gray-600 text-center mb-8 text-lg">
                  Choose how you'd like to connect with us and start your journey
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Join Our Team */}
                  <motion.div
                    onClick={openJoinTeamModal}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 text-center cursor-pointer hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <UserPlus className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Interested in working with us? Send us your information and we'll keep you in mind for future opportunities.
                    </p>
                    <div className="text-blue-600 font-semibold flex items-center justify-center group-hover:text-blue-700 transition-colors">
                      Get Started <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>

                  {/* Apply for Job */}
                  <motion.div
                    onClick={openApplyJobModal}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 text-center cursor-pointer hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-r from-green-600 to-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Briefcase className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply for Job</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Ready to apply for a specific position? Submit your application and let us know why you're the perfect fit.
                    </p>
                    <div className="text-green-600 font-semibold flex items-center justify-center group-hover:text-green-700 transition-colors">
                      Apply Now <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Join Our Team Modal */}
        {showJoinTeamModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Join Our <span className="text-blue-600">Team</span>
                  </h2>
                  <button
                    onClick={closeAllModals}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
               
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <User className="h-4 w-4 mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                      />
                    </div>
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john.doe@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                      />
                    </div>
                  </div>
                 
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                 
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Subject
                    </label>
                    <input
                      type="text"
                      value="Interest in Joining Your Team"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Please describe how we can assist you..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-gray-400"
                    ></textarea>
                  </div>
                 
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={closeAllModals}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Apply for Position Modal */}
        {showApplyJobModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Apply for <span className="text-green-600">Position</span>
                  </h2>
                  <button
                    onClick={closeAllModals}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
               
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <User className="h-4 w-4 mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                      />
                    </div>
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john.doe@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                      />
                    </div>
                  </div>
                 
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                 
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Subject
                    </label>
                    <input
                      type="text"
                      value="Job Application Inquiry"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Please describe how we can assist you..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none hover:border-gray-400"
                    ></textarea>
                  </div>
                 
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={closeAllModals}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenuCareers;