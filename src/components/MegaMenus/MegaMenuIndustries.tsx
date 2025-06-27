import React from 'react';
import { Building2, Heart, ShoppingCart, Banknote, Plane, Factory, ArrowRight, TrendingUp, CheckCircle, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';


const MegaMenuIndustries = () => {
  const industries = [
    { icon: Heart, title: 'Healthcare', href: '/industries#healthcare', color: 'from-red-500 to-pink-500', bgColor: 'bg-red-50' },
    { icon: Banknote, title: 'Finance', href: '/industries#finance', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50' },
    { icon: ShoppingCart, title: 'Retail', href: '/industries#retail', color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-50' },
    { icon: Factory, title: 'Manufacturing', href: '/industries#manufacturing', color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-50' },
    { icon: Plane, title: 'Telecommunications', href: '/industries#telecommunications', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50' },
    { icon: Building2, title: 'Information Technology', href: '/industries#it', color: 'from-indigo-500 to-blue-500', bgColor: 'bg-indigo-50' },
    { icon: Banknote, title: 'BFSI', href: '/industries#bfsi', color: 'from-teal-500 to-cyan-500', bgColor: 'bg-teal-50' },
    { icon: TrendingUp, title: 'Engineering', href: '/industries#engineering', color: 'from-slate-500 to-gray-500', bgColor: 'bg-slate-50' },
    { icon: Factory, title: 'Renewable Energy', href: '/industries#renewable-energy', color: 'from-lime-500 to-green-500', bgColor: 'bg-lime-50' },
    { icon: Factory, title: 'Oil & Gas', href: '/industries#oil-gas', color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-50' }
  ];


  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>


      <div className="relative z-10 grid grid-cols-12 gap-6 p-8">
        {/* Left Navigation - Industries Grid */}
        <div className="col-span-4 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
              <Globe className="h-3 w-3 mr-1" />
              Industries We Serve
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent">
              Sector Expertise
            </h3>
          </div>
         
          <div className="grid grid-cols-2 gap-3">
            {industries.map((industry, index) => (
              <Link
                key={industry.title}
                to={industry.href}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${industry.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(industry.icon, {
                      className: `h-5 w-5 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`
                    })}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {industry.title}
                  </h4>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            ))}
          </div>
        </div>


        {/* Center Content - Industry Insights */}
        <div className="col-span-5 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 text-emerald-700 text-xs font-medium">
                <Zap className="h-3 w-3 mr-1" />
                Industry Focus
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-blue-800 bg-clip-text text-transparent">
                Industry Insights
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transforming businesses across diverse sectors with data-driven solutions tailored to industry-specific challenges and opportunities.
              </p>
            </div>
           
            <div className="relative mt-6 mb-6 overflow-hidden rounded-xl group">
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Industry insights"
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-semibold text-gray-800">Cross-Industry Innovation</p>
                  <p className="text-xs text-gray-600">Leveraging best practices across sectors</p>
                </div>
              </div>
            </div>
           
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { text: 'Scalable Solutions', icon: TrendingUp, color: 'text-blue-500' },
                { text: 'Security Compliance', icon: CheckCircle, color: 'text-emerald-500' },
                { text: 'Smart Infrastructure', icon: Building2, color: 'text-purple-500' },
                { text: 'Operational Excellence', icon: Zap, color: 'text-orange-500' }
              ].map((benefit, index) => (
                <div key={benefit.text} className="group flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white hover:from-emerald-50 hover:to-blue-50 transition-all duration-300">
                  <benefit.icon className={`h-4 w-4 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors">{benefit.text}</span>
                </div>
              ))}
            </div>
           
            <div className="flex items-center justify-between">
              <Link
                to="/industries"
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative z-10 flex items-center space-x-2">
                  <span>Explore Industries</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <a href="#case-studies" className="text-emerald-600 text-sm font-semibold hover:text-emerald-700 transition-colors duration-300 hover:underline">
                View Case Studies →
              </a>
            </div>
          </div>
        </div>


        {/* Right Sidebar - Industry Impact & Stats */}
        <div className="col-span-3 space-y-6">
          {/* Industry Impact */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                Impact Metrics
              </div>
              <h3 className="text-lg font-bold text-gray-900">Our Reach</h3>
            </div>
           
            <div className="space-y-4 mt-4">
              {[
                { number: '25+', label: 'Industries Served', icon: Building2, color: 'text-blue-600' },
                { number: '200+', label: 'Successful Projects', icon: TrendingUp, color: 'text-emerald-600' },
                { number: '95%', label: 'Client Retention', icon: Heart, color: 'text-red-500' }
              ].map((stat, index) => (
                <div key={stat.label} className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 transition-all duration-300">
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(stat.icon, { className: `h-4 w-4 ${stat.color}` })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{stat.label}</span>
                      <span className={`font-bold ${stat.color} text-lg group-hover:scale-110 transition-transform duration-300`}>
                        {stat.number}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Popular Industries */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 shadow-lg border border-gray-100">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                Trending
              </div>
              <h4 className="text-lg font-bold text-gray-900">Popular Industries</h4>
            </div>
           
            <div className="space-y-3 mt-4">
              {[
                { name: 'E-commerce', projects: 8, color: 'text-purple-600' },
                { name: 'FinTech', projects: 6, color: 'text-emerald-600' },
                { name: 'Healthcare', projects: 7, color: 'text-red-500' }
              ].map((industry, index) => (
                <div key={industry.name} className="group flex justify-between items-center p-3 rounded-lg hover:bg-white transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industries.find(i => i.title.toLowerCase().includes(industry.name.toLowerCase()))?.color || 'from-gray-400 to-gray-500'}`}></div>
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{industry.name}</span>
                  </div>
                  <span className={`font-bold ${industry.color} text-sm group-hover:scale-110 transition-transform duration-300`}>
                    {industry.projects} projects
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


export default MegaMenuIndustries;
