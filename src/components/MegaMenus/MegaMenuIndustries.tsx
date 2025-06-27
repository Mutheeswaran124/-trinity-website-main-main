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
    logo: '/assets/logos/data-strategy.png',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Robust data infrastructures for your organization.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    logo: '/assets/logos/data-engineering.png',
  },
  {
    icon: ShieldCheck,
    title: 'Data Governance & Management',
    description: 'Quality, security, and compliance for your data.',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    logo: '/assets/logos/data-governance.png',
  },
  {
    icon: Monitor,
    title: 'Business Intelligence',
    description: 'Actionable insights for decision-making.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    logo: '/assets/logos/business-intelligence.png',
  },
  {
    icon: Cloud,
    title: 'Data Migration & Modernization',
    description: 'Modern platforms for performance and scalability.',
    color: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-50',
    logo: '/assets/logos/data-migration.png',
  },
  {
    icon: Activity,
    title: 'Artificial Intelligence',
    description: 'AI solutions for innovation and automation.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    logo: '/assets/logos/ai.png',
  },
  {
    icon: Users,
    title: 'Staffing Solutions',
    description: 'Skilled professionals for your data team.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    logo: '/assets/logos/staffing.png',
  },
  {
    icon: Briefcase,
    title: 'ERP Planning',
    description: 'Tailored ERP solutions for efficiency.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    logo: '/assets/logos/erp.png',
  },
];

const MegaMenuServices: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 grid grid-cols-12 gap-6 p-8">
        {/* Left: Services Grid */}
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
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${service.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    {/* Logo Image */}
                    <img
                      src={service.logo}
                      alt={`${service.title} logo`}
                      className="h-6 w-6 object-contain"
                    />
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

        {/* [Center and Right Sections remain unchanged...] */}
        {/* You can keep your "Enterprise Solutions", "Process", and "Highlights" blocks as they are */}
      </div>
    </div>
  );
};

export default MegaMenuServices;
