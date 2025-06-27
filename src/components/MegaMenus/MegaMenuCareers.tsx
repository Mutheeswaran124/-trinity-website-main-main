import React, { useState } from 'react';
import {
  MapPin, DollarSign, Users, Heart, ArrowRight, Star, Briefcase,
  ChevronDown, ChevronUp, UserPlus, Search, Building, Award, X,
  User, Mail, MessageSquare, Sparkles, TrendingUp, Zap
} from 'lucide-react';


// Job Listings Data
const jobListings = [
  {
    title: 'Senior React Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $160k',
    level: 'Senior',
    href: '#job-1',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$110k - $140k',
    level: 'Mid-level',
    href: '#job-2',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Frontend Intern',
    location: 'San Francisco, CA',
    type: 'Internship',
    salary: '$25/hour',
    level: 'Entry',
    href: '#job-3',
    image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];


// Company Stats and Perks Data
const companyStats = [
  { number: '50+', label: 'Team Members', icon: Users, color: 'text-blue-600' },
  { number: '4.8/5', label: 'Employee Rating', icon: Star, color: 'text-yellow-500' },
  { number: '95%', label: 'Retention Rate', icon: Heart, color: 'text-red-500' },
];


const companyPerks = {
  title: 'Why Join Us?',
  description: 'Work in a dynamic environment where innovation thrives!',
  image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  benefits: ['Health Insurance', '$3,000 Learning Budget', 'Flexible Work Arrangements', 'Unlimited PTO']
};


const MegaMenuCareers = () => {
  const [isJobSearchOpen, setIsJobSearchOpen] = useState(false);
  const [showChoosePathModal, setShowChoosePathModal] = useState(false);
  const [showJoinTeamModal, setShowJoinTeamModal] = useState(false);
  const [showApplyJobModal, setShowApplyJobModal] = useState(false);


  const toggleJobSearch = () => {
    setIsJobSearchOpen(!isJobSearchOpen);
  };


  const openChoosePathModal = () => {
    setShowChoosePathModal(true);
  };


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
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>


        <div className="relative z-10 grid grid-cols-12 gap-6 p-8">
          {/* Job Listings */}
          <div className="col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium">
                <Briefcase className="h-3 w-3 mr-1" />
                Open Positions
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
                Join Our Team
              </h3>
            </div>
           
            <div className="space-y-4">
              {jobListings.map((job, index) => (
                <a key={job.title} href={job.href} className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1 block">
                  <div className="flex items-center space-x-4">
                    <div className="relative overflow-hidden rounded-lg">
                      <img src={job.image} alt={job.title} className="w-16 h-16 object-cover transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-orange-700 transition-colors duration-300 mb-2">{job.title}</h4>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-600 flex items-center">
                          <MapPin className="h-3 w-3 mr-1 text-gray-400" /> {job.location}
                        </p>
                        <p className="text-xs text-gray-600 flex items-center">
                          <DollarSign className="h-3 w-3 mr-1 text-gray-400" /> {job.salary}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">{job.level}</span>
                      <ArrowRight className="h-4 w-4 text-orange-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              ))}
            </div>
          </div>


          {/* Company Perks & Stats */}
          <div className="col-span-4 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-red-100 to-orange-100 text-orange-700 text-xs font-medium">
                  <Heart className="h-3 w-3 mr-1" />
                  {companyPerks.title}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{companyPerks.description}</p>
              </div>
             
              <div className="grid grid-cols-3 gap-3 my-4">
                {companyStats.map((stat, index) => (
                  <div key={stat.label} className="group text-center p-3 bg-gradient-to-br from-gray-50 to-white rounded-lg hover:shadow-md transition-all duration-300">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className={`h-4 w-4 ${stat.color}`} />
                      </div>
                    </div>
                    <p className="text-sm font-bold text-gray-900">{stat.number}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>


              <div className="relative overflow-hidden rounded-xl mb-4 group">
                <img src={companyPerks.image} alt="Company Culture" className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-xs font-semibold text-gray-800">Team Collaboration</p>
                  </div>
                </div>
              </div>
             
              <div className="grid grid-cols-2 gap-2">
                {companyPerks.benefits.map((benefit, index) => (
                  <div key={benefit} className="group flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-white hover:from-orange-50 hover:to-red-50 p-2 rounded-lg transition-all duration-300">
                    <Award className="h-3 w-3 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs font-medium text-gray-900 group-hover:text-gray-800 transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Find Job Section */}
          <div className="col-span-3 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                  <Search className="h-3 w-3 mr-1" />
                  Get Started
                </div>
                <h4 className="text-lg font-bold text-gray-900">Find Your Role</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Ready to make an impact? Explore opportunities with us.</p>
              </div>
             
              <div className="space-y-3 mt-4">
                <button
                  onClick={openChoosePathModal}
                  className="group relative overflow-hidden w-full text-white bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-red-700 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>


                <button
                  onClick={toggleJobSearch}
                  className="group w-full text-orange-600 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 py-3 px-4 rounded-xl font-semibold hover:from-orange-100 hover:to-red-100 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <TrendingUp className="h-4 w-4" />
                  <span>Explore Opportunities</span>
                  {isJobSearchOpen ? (
                    <ChevronUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                  )}
                </button>
              </div>
            </div>


            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 shadow-lg border border-gray-100">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                  <Zap className="h-3 w-3 mr-1" />
                  Quick Facts
                </div>
                <h4 className="text-lg font-bold text-gray-900">Why Trinity?</h4>
              </div>
             
              <div className="space-y-3 mt-4">
                {[
                  { label: 'Average Hire Time', value: '2 weeks', color: 'text-blue-600' },
                  { label: 'Career Growth Rate', value: '85%', color: 'text-emerald-600' },
                  { label: 'Remote Flexibility', value: '100%', color: 'text-purple-600' }
                ].map((stat, index) => (
                  <div key={stat.label} className="group flex justify-between items-center p-3 rounded-lg hover:bg-white transition-all duration-300">
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{stat.label}</span>
                    <span className={`font-bold ${stat.color} text-sm group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Choose Your Path Modal */}
      {showChoosePathModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Choose Your Path</h2>
                <button
                  onClick={closeAllModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>


              <p className="text-gray-600 text-center mb-8">Choose how you'd like to connect with us</p>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Join Our Team */}
                <div
                  onClick={openJoinTeamModal}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 text-center cursor-pointer hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors">
                    <UserPlus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Team</h3>
                  <p className="text-gray-600 mb-6">
                    Interested in working with us? Send us your information and we'll keep you in mind for future opportunities.
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center justify-center group-hover:text-blue-700">
                    Get Started <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>


                {/* Apply for Job */}
                <div
                  onClick={openApplyJobModal}
                  className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 text-center cursor-pointer hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Apply for Job</h3>
                  <p className="text-gray-600 mb-6">
                    Ready to apply for a specific position? Submit your application and let us know why you're the perfect fit.
                  </p>
                  <div className="text-green-600 font-semibold flex items-center justify-center group-hover:text-green-700">
                    Apply Now <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Join Our Team Modal */}
      {showJoinTeamModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Join Our Team</h2>
                <button
                  onClick={closeAllModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
               
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Please describe how we can assist you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
               
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closeAllModals}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}


      {/* Apply for Position Modal */}
      {showApplyJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Apply for Position</h2>
                <button
                  onClick={closeAllModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                    <p className="text-xs text-red-500 mt-1 opacity-0">Please fill in this field.</p>
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
               
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Please describe how we can assist you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
               
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closeAllModals}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default MegaMenuCareers;
