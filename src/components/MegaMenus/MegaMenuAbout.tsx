import React from 'react';
import { Users, Target, Award, Globe, Building, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>


      <div className="relative z-10 grid grid-cols-9 gap-8 p-8">
        {/* Left Section - Company Overview */}
        <div className="col-span-3 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
              About Trinity
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              Why Trinity Technology Solutions?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering businesses with cutting-edge <span className="font-semibold text-blue-600">data engineering, analytics, and AI solutions</span>.
            </p>
          </div>
         
          <div className="space-y-4">
            {[
              { icon: Target, text: 'Founded in 2020', color: 'text-emerald-600' },
              { icon: Award, text: 'Databricks Official Partner', color: 'text-purple-600' },
              { icon: Building, text: 'Global Presence in 4+ Continent', color: 'text-blue-600' }
            ].map((item, index) => (
              <div key={index} className="group flex items-center space-x-4 p-3 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-md">
                <div className={`p-2 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm group-hover:shadow-md transition-all duration-300`}>
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{item.text}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Center Section - Technology Partners */}
        <div className="col-span-3 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
              Technology Partners
            </div>
            <h3 className="text-xl font-bold text-gray-900">Trusted Partnerships</h3>
          </div>
         
          <div className="grid grid-cols-2 gap-3">
            {partners.map((partner, index) => (
              <div key={partner.name} className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img src={partner.logo} alt={partner.name} className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{partner.name}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>


        {/* Right Section - Impact Metrics */}
        <div className="col-span-3 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
              Our Impact
            </div>
            <h3 className="text-xl font-bold text-gray-900">Measurable Results</h3>
          </div>
         
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.label}
                className="group relative overflow-hidden rounded-2xl min-h-[140px] cursor-pointer transition-all duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url('${highlight.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-300"></div>
               
                {/* Content */}
                <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                      <highlight.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{highlight.number}</div>
                  </div>
                  <p className="text-sm font-semibold text-white/90">{highlight.label}</p>
                </div>
               
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>


        {/* Call-to-Action */}
        <div className="col-span-9 flex justify-center mt-8">
          <button
            onClick={() => navigate('/our-story')}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative z-10 flex items-center space-x-3">
              <span>Learn More About Us</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </div>
  );
};


export default MegaMenuAbout;
