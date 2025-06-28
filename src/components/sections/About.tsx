import React from 'react';
import {
  Users,
  TrendingUp,
  Globe,
  Database,
  Lightbulb,
  Award,
  Earth,
  Handshake,
  CheckCircle,
  Clock,
  Headphones,
  Heart,
  Zap
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Projects Delivered', color: 'from-blue-500 to-purple-600' },
    { icon: TrendingUp, value: '25+', label: 'Years Experience', color: 'from-purple-500 to-pink-600' },
    { icon: Globe, value: '10+', label: 'Countries Served', color: 'from-pink-500 to-red-600' },
    { icon: Database, value: '100+', label: 'Data Experts', color: 'from-red-500 to-orange-600' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace the power of emerging technologies to create solutions that are smarter, faster, and future-ready.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in everything we do — from the code we write to the relationships we build. Good isn\'t good enough.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Earth,
      title: 'Global Impact',
      description: 'With a presence across multiple countries, we think beyond borders — solving challenges that create value for businesses and society worldwide.',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'We grow stronger together — across teams, with clients, and through partnerships. We believe in open minds and shared wins.',
      color: 'from-red-500 to-orange-600'
    }
  ];

  const clientBenefits = [
    { icon: CheckCircle, text: 'Certified Databricks Partnership & expertise', color: 'text-green-500' },
    { icon: Award, text: 'Dedicated data engineering specialists for every project', color: 'text-blue-500' },
    { icon: Clock, text: 'Agile delivery with transparent project management', color: 'text-purple-500' },
    { icon: Headphones, text: '24/7 support and strategic consultation calls', color: 'text-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex flex-col items-center mb-8">
            <img
              src="https://trinitetech.com/wp-content/uploads/2024/02/Trinity-Logo-1.svg"
              alt="Trinity Logo"
              className="h-16 mb-6 filter brightness-0 invert hue-rotate-180 saturate-200"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Welcome to Trinity Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-purple-600 font-medium max-w-4xl mx-auto leading-relaxed">
              Your Global Partner in Data, AI & Digital Transformation
            </p>
          </div>
        </div>

        {/* Stats Section - Reduced margin bottom from mb-24 to mb-12 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col justify-center min-h-[200px]">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-semibold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-center leading-tight px-2">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section - Extra Wide Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2020, Trinity began as a specialist staffing company — but we didn't stop there. Born from the vision of a founder with over 25 years of HR leadership and backed by partners with 25+ years of deep data expertise, we're built on the rare blend of people insight and technical mastery.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With a sharp understanding of talent, technology, and business challenges, we've evolved into a full-scale software solutions provider. Today, we stand at the forefront of Data & AI innovation, helping businesses transform with confidence.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This synergy is our biggest strength — and your biggest advantage. From data engineering and AI-driven platforms to enterprise software and digital products, our diverse team delivers outcomes that matter — consistently, efficiently, and with heart.
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500 mb-8">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                We don't just build tech.<br />
                <span className="font-medium">We build trust. We build the future.</span>
              </p>
            </div>

            {/* Unique Value Proposition */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">What Sets Us Apart</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The rare blend of people insight and technical mastery — combining 25+ years of HR leadership with deep data expertise to deliver solutions that truly understand both technology and human needs.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating card - Larger with bigger text */}
            <div className="absolute -bottom-10 -left-10 bg-white rounded-xl p-8 shadow-lg border border-gray-100 max-w-sm">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">Why Clients Choose Us</h4>
              <div className="space-y-4">
                {clientBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    <span className="text-base text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partnership Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-24 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Official Databricks Partner</h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Our strategic partnership with Databricks enables us to deliver cutting-edge lakehouse architecture
            and advanced analytics solutions that transform how organizations leverage their data assets.
          </p>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The DNA of how we think, build, and lead.
          </p>
        </div>

        {/* Fixed Grid Layout - Proper 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className={`w-14 h-14 lg:w-16 lg:h-16 mb-4 lg:mb-6 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">{value.title}</h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed flex-grow">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;