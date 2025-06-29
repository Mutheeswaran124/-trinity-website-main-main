import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../layout/Header";

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
  Star,
  Award,
  TrendingUp,
  Clock,
  ArrowLeft,
} from 'lucide-react';

const ServicesPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesSections = [
    {
      id: 'data-strategy',
      icon: BarChart2,
      title: 'Data Strategy & Analytics',
      subtitle: 'Transform Raw Data Into Strategic Advantage',
      description: 'Unlock the full potential of your data with our comprehensive analytics and AI solutions. From predictive modeling to understanding customer behavior, we help you harness data power like never before. Our expert team develops tailored data roadmaps that align with your business objectives and drive measurable outcomes.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Advanced Predictive Analytics',
        'Real-time Data Processing',
        'Machine Learning Integration',
        'Custom Dashboard Development',
        'ROI-focused Insights'
      ],
      stats: [
        { label: 'Data Accuracy', value: '99.8%' },
        { label: 'Processing Speed', value: '10x Faster' },
        { label: 'Cost Reduction', value: '40%' }
      ]
    },
    {
      id: 'data-engineering',
      icon: Database,
      title: 'Data Engineering & Infrastructure',
      subtitle: 'Build Robust Data Foundations',
      description: 'Create scalable, reliable data infrastructures that grow with your organization. Our engineering solutions ensure your data flows seamlessly across all systems, providing the foundation for advanced analytics and business intelligence.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Cloud-native Architecture',
        'Real-time Data Pipelines',
        'Automated Data Quality',
        'Scalable Storage Solutions',
        'API Integration'
      ],
      stats: [
        { label: 'Uptime Guarantee', value: '99.9%' },
        { label: 'Data Processing', value: '1TB/hour' },
        { label: 'Integration APIs', value: '500+' }
      ]
    },
    {
      id: 'data-governance',
      icon: ShieldCheck,
      title: 'Data Governance & Security',
      subtitle: 'Ensure Quality, Security & Compliance',
      description: 'Protect your most valuable asset with comprehensive data governance frameworks. We implement robust security measures, ensure regulatory compliance, and establish data quality standards that maintain integrity across your entire data ecosystem.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'GDPR & CCPA Compliance',
        'Data Quality Monitoring',
        'Role-based Access Control',
        'Audit Trail Management',
        'Risk Assessment Tools'
      ],
      stats: [
        { label: 'Security Score', value: '98%' },
        { label: 'Compliance Rate', value: '100%' },
        { label: 'Risk Reduction', value: '85%' }
      ]
    },
    {
      id: 'business-intelligence',
      icon: Monitor,
      title: 'Business Intelligence & Reporting',
      subtitle: 'Transform Data Into Actionable Insights',
      description: 'Empower decision-makers with intuitive dashboards and comprehensive reporting solutions. Our BI platforms provide real-time insights that drive strategic decisions and operational efficiency across your organization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Interactive Dashboards',
        'Automated Reporting',
        'Mobile-first Design',
        'Self-service Analytics',
        'Advanced Visualizations'
      ],
      stats: [
        { label: 'Report Generation', value: '10x Faster' },
        { label: 'User Adoption', value: '95%' },
        { label: 'Decision Speed', value: '60% Faster' }
      ]
    },
    {
      id: 'cloud-migration',
      icon: Cloud,
      title: 'Cloud Migration & Modernization',
      subtitle: 'Modernize Your Data Infrastructure',
      description: 'Migrate to modern cloud platforms for enhanced performance, scalability, and cost-effectiveness. Our migration strategies ensure minimal downtime while maximizing the benefits of cloud-native technologies.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Zero-downtime Migration',
        'Multi-cloud Strategy',
        'Cost Optimization',
        'Security Enhancement',
        'Performance Monitoring'
      ],
      stats: [
        { label: 'Migration Success', value: '100%' },
        { label: 'Cost Savings', value: '50%' },
        { label: 'Performance Boost', value: '3x' }
      ]
    },
    {
      id: 'artificial-intelligence',
      icon: Activity,
      title: 'Artificial Intelligence & Machine Learning',
      subtitle: 'Innovate with AI-Powered Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, predict outcomes, and create intelligent applications. Our AI solutions drive innovation and competitive advantage across industries.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom AI Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making'
      ],
      stats: [
        { label: 'Model Accuracy', value: '96%' },
        { label: 'Process Automation', value: '80%' },
        { label: 'Time Savings', value: '70%' }
      ]
    },
    {
      id: 'erp-planning',
      icon: Briefcase,
      title: 'ERP Evolution & Planning',
      subtitle: 'Streamline Business Operations',
      description: 'Say goodbye to clunky systems and hello to streamlined processes. Our ERP solutions are the future of business efficiency, offering seamless integration and unparalleled insights across the board.',
      image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Integrated Business Processes',
        'Real-time Operations View',
        'Scalable Architecture',
        'Custom Workflows',
        'Mobile Accessibility'
      ],
      stats: [
        { label: 'Process Efficiency', value: '90%' },
        { label: 'Implementation Time', value: '60% Faster' },
        { label: 'User Satisfaction', value: '4.9/5' }
      ]
    },
    {
      id: 'staffing-solutions',
      icon: Users,
      title: 'Expert Staffing Solutions',
      subtitle: 'Build Your Dream Data Team',
      description: 'Access top-tier data professionals to strengthen your team. Our staffing solutions provide skilled experts who seamlessly integrate with your organization and drive your data initiatives forward.',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Vetted Data Specialists',
        'Flexible Engagement Models',
        'Rapid Team Scaling',
        'Skills Assessment',
        'Cultural Fit Evaluation'
      ],
      stats: [
        { label: 'Placement Success', value: '98%' },
        { label: 'Time to Hire', value: '14 Days' },
        { label: 'Retention Rate', value: '95%' }
      ]
    }
  ];

  const currentService = servicesSections.find(service => service.id === serviceId);
  const Icon = currentService?.icon;

  useEffect(() => {
    if (!currentService) {
      navigate('/');
    }
  }, [currentService, navigate]);

  if (!currentService || !Icon) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back to Services</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 mt-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">{currentService.title}</h1>
                  <p className="text-xl text-blue-100 mt-2">{currentService.subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                {currentService.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Award className="h-5 w-5 mr-2 text-yellow-400" />
                  <span className="text-sm">Enterprise Grade</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                  <span className="text-sm">Proven Results</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Clock className="h-5 w-5 mr-2 text-blue-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Features */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features & Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Proven Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {['Discovery', 'Planning', 'Implementation', 'Optimization'].map((step, idx) => (
                  <div key={step} className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                      {idx + 1}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{step}</h4>
                    <p className="text-sm text-gray-600">
                      {idx === 0 && 'Understanding your unique requirements and challenges'}
                      {idx === 1 && 'Creating a strategic roadmap for success'}
                      {idx === 2 && 'Executing with precision and expertise'}
                      {idx === 3 && 'Continuous improvement and optimization'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                {currentService.stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6 text-sm">
                Let's discuss how this solution can transform your business operations.
              </p>
              <button className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                <span>Schedule Consultation</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;