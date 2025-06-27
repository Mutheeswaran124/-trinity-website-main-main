import React from 'react';
import {
  BookOpen,
  Video,
  Mic,
  ArrowRight,
  FileText,
  BarChart,
  Lightbulb,
  TrendingUp,
  Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const insights = [
  {
    icon: BookOpen,
    title: 'Leveraging Big Data for Business Growth',
    category: 'Data Strategy',
    href: 'https://www.ibm.com/topics/big-data-analytics',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Video,
    title: 'The Future of Data Engineering',
    category: 'Technology',
    href: 'https://www.montecarlodata.com/blog-the-future-of-the-data-engineer/',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Mic,
    title: 'AI & Machine Learning in Healthcare',
    category: 'Industry Insights',
    href: 'https://eithealth.eu/news-article/machine-learning-in-healthcare-uses-benefits-and-pioneers-in-the-field/',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50'
  }
];


const resources = [
  {
    icon: FileText,
    title: 'Data Governance Framework',
    type: 'Whitepaper',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: BarChart,
    title: 'Modern Data Stack Implementation',
    type: 'Case Study',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: BookOpen,
    title: 'Data Scientist\'s Guide to Databricks',
    type: 'eBook',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50'
  }
];


const MegaMenuInsights = ({ onClose }: { onClose?: () => void }) => {
  const navigate = useNavigate();


  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClose) onClose();
    navigate('/#insights');
  };


  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50/30 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>


      <div className="relative z-10 grid grid-cols-12 gap-6 p-8">
        {/* Insights Section */}
        <div className="col-span-4 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-medium">
              <Lightbulb className="h-3 w-3 mr-1" />
              Latest Insights
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-violet-800 to-gray-900 bg-clip-text text-transparent">
              Knowledge Hub
            </h3>
          </div>
         
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <a
                key={insight.title}
                href={insight.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${insight.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(insight.icon, {
                      className: `h-5 w-5 bg-gradient-to-r ${insight.color} bg-clip-text text-transparent`
                    })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-violet-700 transition-colors duration-300 mb-1 line-clamp-2">
                      {insight.title}
                    </h4>
                    <p className="text-xs text-gray-600 font-medium">{insight.category}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            ))}
          </div>
        </div>


        {/* Featured Report Section */}
        <div className="col-span-5 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-violet-100 text-violet-700 text-xs font-medium">
                <Eye className="h-3 w-3 mr-1" />
                Featured Content
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-violet-800 to-blue-800 bg-clip-text text-transparent">
                Featured Report
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Explore how emerging technologies impact business strategies and discover actionable insights for your organization's digital transformation journey.
              </p>
            </div>
           
            <div className="relative mt-6 mb-6 overflow-hidden rounded-xl group">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Report Cover"
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-violet-600" />
                    <p className="text-sm font-semibold text-gray-800">Technology Trends 2024</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Strategic insights for digital leaders</p>
                </div>
              </div>
            </div>
           
            <div className="flex items-center justify-between">
              <button
                onClick={handleExploreClick}
                className="group relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-1"
                type="button"
              >
                <div className="relative z-10 flex items-center space-x-2">
                  <span>Explore Case Studies</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="#all-reports"
                className="text-violet-600 text-sm font-semibold hover:text-violet-700 transition-colors duration-300 hover:underline"
              >
                View All Reports →
              </a>
            </div>
          </div>
        </div>


        {/* Resources Section */}
        <div className="col-span-3 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                Resources
              </div>
              <h4 className="text-lg font-bold text-gray-900">Download Center</h4>
            </div>
           
            <div className="space-y-4 mt-4">
              {resources.map((resource, index) => (
                <div
                  key={resource.title}
                  className="group relative overflow-hidden bg-gradient-to-r from-gray-50 to-white hover:from-violet-50 hover:to-purple-50 border border-gray-100 rounded-xl p-4 transition-all duration-300 hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${resource.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      {React.createElement(resource.icon, {
                        className: `h-4 w-4 bg-gradient-to-r ${resource.color} bg-clip-text text-transparent`
                      })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-violet-700 transition-colors duration-300 mb-1 line-clamp-2">
                        {resource.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-600 font-medium">{resource.type}</span>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span className="text-xs text-violet-600 font-medium">Free</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              ))}
            </div>
          </div>


          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 shadow-lg border border-gray-100">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                Analytics
              </div>
              <h4 className="text-lg font-bold text-gray-900">Content Impact</h4>
            </div>
           
            <div className="space-y-3 mt-4">
              {[
                { label: 'Monthly Readers', value: '25K+', color: 'text-blue-600' },
                { label: 'Published Articles', value: '150+', color: 'text-emerald-600' },
                { label: 'Expert Contributors', value: '20+', color: 'text-purple-600' }
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
  );
};


export default MegaMenuInsights;

