import React from 'react';
import {
  BarChart2,
  Database,
  ShieldCheck,
  Monitor,
  Cloud,
  Activity,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';


const services = [
  {
    icon: BarChart2,
    title: 'Data Strategy',
    description: 'Tailored data roadmaps for business outcomes.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Robust data infrastructures for your organization.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: ShieldCheck,
    title: 'Data Governance & Management',
    description: 'Quality, security, and compliance for your data.',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Monitor,
    title: 'Business Intelligence',
    description: 'Actionable insights for decision-making.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Cloud,
    title: 'Data Migration & Modernization',
    description: 'Modern platforms for performance and scalability.',
    color: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-50',
  },
  {
    icon: Activity,
    title: 'Artificial Intelligence',
    description: 'AI solutions for innovation and automation.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Users,
    title: 'Staffing Solutions',
    description: 'Skilled professionals for your data team.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
  },
  {
    icon: Briefcase,
    title: 'ERP Planning',
    description: 'Tailored ERP solutions for efficiency.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
];


const MegaMenuServices: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>


      <div className="relative z-10 grid grid-cols-12 gap-6 p-8">
        {/* Left Navigation - Services Grid */}
        <div className="col-span-4 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
              <Sparkles className="h-3 w-3 mr-1" />
              Our Services
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent">
              Comprehensive Solutions
            </h3>
          </div>
         
          <div className="grid grid-cols-1 gap-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${service.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-5 w-5 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>


        {/* Center Content - Featured Solution */}
        <div className="col-span-5 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 text-xs font-medium">
                Enterprise Ready
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Enterprise Solutions
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive technology solutions designed for enterprise operations with scalability and security at the core.
              </p>
            </div>
           
            <div className="relative mt-6 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Enterprise solutions"
                className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
           
            <div className="grid grid-cols-2 gap-4 mb-6">
              {['Scalable Architecture', '24/7 Support', 'Custom Integration', 'Security Compliance'].map((benefit, index) => (
                <div key={benefit} className="group flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
           
            <div className="flex items-center justify-between">
              <Link
                to="/services"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <a href="#consultation" className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors duration-300 hover:underline">
                Free Consultation →
              </a>
            </div>
          </div>
        </div>


        {/* Right Sidebar - Process & Highlights */}
        <div className="col-span-3 space-y-6">
          {/* Our Process */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                Process
              </div>
              <h3 className="text-lg font-bold text-gray-900">Our Approach</h3>
            </div>
           
            <div className="space-y-4 mt-4">
              {['Discovery', 'Planning', 'Development', 'Deployment'].map((title, index) => (
                <div key={title} className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    {index < 3 && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-blue-300 to-indigo-300"></div>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">{title}</h4>
                </div>
              ))}
            </div>
          </div>


          {/* Service Highlights */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 shadow-lg border border-gray-100">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                Highlights
              </div>
              <h4 className="text-lg font-bold text-gray-900">Why Choose Us</h4>
            </div>
           
            <div className="space-y-3 mt-4">
              {[
                { label: 'Project Success Rate', value: '98%', color: 'text-emerald-600' },
                { label: 'Average Delivery Time', value: '6 weeks', color: 'text-blue-600' },
                { label: 'Client Satisfaction', value: '4.9/5', color: 'text-purple-600' }
              ].map((highlight, index) => (
                <div key={highlight.label} className="group flex justify-between items-center p-3 rounded-lg hover:bg-white transition-all duration-300">
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{highlight.label}</span>
                  <span className={`font-bold ${highlight.color} text-sm group-hover:scale-110 transition-transform duration-300`}>
                    {highlight.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MegaMenuServices;
