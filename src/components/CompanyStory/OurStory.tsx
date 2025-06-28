import React, { useState, useEffect, useRef } from 'react';
import { Target, Building2, Lightbulb, Heart, Globe, Users as TeamIcon, CheckCircle, Sparkles, TrendingUp, Zap, Star, ArrowRight, Calendar, MapPin, Eye, Compass } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  status: 'completed' | 'current' | 'upcoming';
}

const slides: Slide[] = [
  {
    id: 1,
    title: "The Beginning",
    description: "Trinity Technology Solutions was founded in 2020 with a vision to revolutionize data engineering and analytics. Starting as a small team of passionate data experts in North America.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2020",
    status: "completed"
  },
  {
    id: 2,
    title: "First Major Partnership",
    description: "Became an official Databricks partner, establishing our credibility in the data lakehouse architecture space and securing our first 100 enterprise clients.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2021",
    status: "completed"
  },
  {
    id: 3,
    title: "European Expansion",
    description: "Opened our European headquarters in London, establishing Trinity Europe Ltd. This marked our first international expansion and entry into the European market.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2022",
    status: "completed"
  },
  {
    id: 4,
    title: "Asian Market Entry",
    description: "Launched Trinity Asia-Pacific in Singapore, bringing our data solutions to the rapidly growing Asian market and establishing partnerships with local enterprises.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2023",
    status: "completed"
  },
  {
    id: 5,
    title: "African Operations",
    description: "Established Trinity Africa in Cape Town, completing our global presence across four continents and bringing advanced data solutions to emerging markets.",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2024",
    status: "completed"
  },
  {
    id: 6,
    title: "Digital Marketing Revolution",
    description: "Launched GrowthPulse, our new digital marketing company, expanding our services to include comprehensive digital marketing solutions, brand strategy, and growth hacking for businesses worldwide.",
    image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2025",
    status: "current"
  }
];

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace the power of emerging technologies to create solutions that are smarter, faster, and future-ready.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    icon: Heart,
    title: "Excellence",
    description: "We strive for perfection in everything we do — from the code we write to the relationships we build. Good isn't good enough.",
    color: "from-red-400 to-pink-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-600"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "With a presence across multiple countries, we think beyond borders — solving challenges that create value for businesses and society worldwide.",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: TeamIcon,
    title: "Collaboration",
    description: "We grow stronger together — across teams, with clients, and through partnerships. We believe in open minds and shared wins.",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  }
];

const TimelineItem: React.FC<{ slide: Slide; index: number; isLast: boolean }> = ({ slide, index, isLast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusColor = () => {
    switch (slide.status) {
      case 'completed':
        return 'bg-emerald-500';
      case 'current':
        return 'bg-blue-500 animate-pulse';
      case 'upcoming':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusIcon = () => {
    switch (slide.status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-white" />;
      case 'current':
        return <div className="w-2 h-2 bg-white rounded-full animate-ping" />;
      case 'upcoming':
        return <div className="w-2 h-2 bg-white rounded-full opacity-60" />;
      default:
        return <div className="w-2 h-2 bg-white rounded-full" />;
    }
  };

  return (
    <div ref={itemRef} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 group">
      {/* Timeline line - only visible on larger screens */}
      {!isLast && (
        <div className="hidden lg:block absolute left-1/2 top-16 w-px h-full bg-gray-200 transform -translate-x-1/2" />
      )}
     
      {/* Year Section - Left side on desktop, top on mobile */}
      <div className={`lg:col-span-4 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} items-start`}>
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:text-right">
            {/* Timeline dot - centered on desktop */}
            <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${getStatusColor()} ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
              {getStatusIcon()}
            </div>
           
            {/* Year display */}
            <div className="lg:mb-4">
              <h3 className="text-4xl lg:text-6xl font-black text-gray-300 leading-none">
                {slide.year}
              </h3>
              {slide.status === 'current' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mt-2">
                  <Star className="w-3 h-3" />
                  Current
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Right side on desktop, bottom on mobile */}
      <div className={`lg:col-span-8 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 group-hover:border-gray-200 hover:-translate-y-1">
          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
           
            {/* Status badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-full text-white font-semibold text-sm backdrop-blur-md border border-white/20 ${
                slide.status === 'completed' ? 'bg-emerald-500/90' :
                slide.status === 'current' ? 'bg-blue-500/90 animate-pulse' :
                'bg-gray-500/90'
              }`}>
                {slide.status === 'completed' ? 'Completed' :
                 slide.status === 'current' ? 'Current' :
                 'Upcoming'}
              </span>
            </div>

            {/* Decorative corner element */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white/20" />
          </div>

          {/* Content */}
          <div className="p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {slide.title}
            </h4>
           
            <p className="text-gray-600 leading-relaxed mb-6">
              {slide.description}
            </p>

            {/* Progress indicator */}
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${getStatusColor().replace('animate-pulse', '')} shadow-sm`} />
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-1000 ${
                    slide.status === 'completed' ? 'w-full bg-gradient-to-r from-emerald-400 to-emerald-500' :
                    slide.status === 'current' ? 'w-3/4 bg-gradient-to-r from-blue-400 to-blue-500' :
                    'w-1/4 bg-gradient-to-r from-gray-300 to-gray-400'
                  }`}
                />
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Hero Section */}
      <div className="relative bg-white py-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Calendar className="w-4 h-4" />
            Company Story
          </div>
         
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
            The Trinity Story
          </h1>
         
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            From a small team of passionate experts in 2020 to a global tech force with entities across four countries by 2025 — we've grown, evolved, and stayed true to our mission:
          </p>
         
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-lg font-semibold">
            <Target className="w-5 h-5" />
            Solving real problems with people-powered innovation
          </div>
        </div>
      </div>

      {/* Vision & Mission with Images */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-black text-gray-900">Vision</h2>
              </div>
             
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  To be a global catalyst for innovation and inclusive growth — transforming businesses
                  across industries through cutting-edge technology, while empowering people and
                  communities through meaningful employment.
                </p>
               
                <div className="flex items-center gap-3 text-blue-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-semibold">Global Innovation Leader</span>
                </div>
               
                <div className="flex items-center gap-3 text-blue-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-semibold">Technology-Driven Transformation</span>
                </div>
               
                <div className="flex items-center gap-3 text-blue-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-semibold">Inclusive Growth & Employment</span>
                </div>
              </div>
            </div>
           
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Global Vision</h3>
                  <p className="text-blue-100">Transforming businesses worldwide</p>
                </div>
               
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>
             
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce" />
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-purple-100">Delivering intelligent solutions</p>
                </div>
               
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-white" />
                </div>
              </div>
             
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 animate-bounce" />
            </div>
           
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-black text-gray-900">Mission</h2>
              </div>
             
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  At Trinity Technology Solutions, our mission is to deliver intelligent, scalable, and
                  human-centered solutions that solve real-world problems for startups and enterprises alike.
                </p>
               
                <p className="text-lg text-gray-600 leading-relaxed">
                  We aim to bridge the gap between technology and purpose by:
                </p>
               
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Harnessing the power of Data, AI, and emerging tech</span>
                  </div>
                 
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Driving business transformation across global markets</span>
                  </div>
                 
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Creating sustainable employment opportunities</span>
                  </div>
                 
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Enabling organizations to innovate, scale, and thrive</span>
                  </div>
                </div>
               
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <p className="text-gray-700 leading-relaxed font-medium text-lg">
                    We exist to build a smarter, more connected, and more equitable world — one solution,
                    one hire, and one breakthrough at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section - Aceternity Style */}
      <div className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 -translate-x-36 -translate-y-36" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-20 translate-x-48 translate-y-48" />
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Our Journey Through Time
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From startup to global enterprise with digital marketing expansion —
              witness our transformation across the years
            </p>
          </div>
         
          <div className="relative">
            {slides.map((slide, index) => (
              <TimelineItem
                key={slide.id}
                slide={slide}
                index={index}
                isLast={index === slides.length - 1}
              />
            ))}
           
            {/* Timeline end indicator */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl px-8 py-6 border border-purple-100">
                <Sparkles className="w-8 h-8 text-purple-500 animate-pulse" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">The Future Continues...</h3>
                  <p className="text-gray-600">Innovation never stops at Trinity Technology Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The DNA of how we think, build, and lead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${value.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`h-6 w-6 ${value.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-2">2020</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Founded</div>
            </div>
           
            <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-2">5</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Global Entities</div>
            </div>
           
            <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-2">4</div>
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
