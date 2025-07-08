import { motion } from 'framer-motion';
import {
  Users, Award, Heart, Globe, Clock, TrendingUp, Star, Handshake
} from 'lucide-react';

const JoinOurTeam = () => {
  const companyStats = [
    { number: '50+', label: 'Team Members', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { number: '4.8/5', label: 'Employee Rating', icon: Star, color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
    { number: '95%', label: 'Retention Rate', icon: Heart, color: 'text-red-500', bgColor: 'bg-red-100' },
  ];

  const benefits = [
    { text: 'Health Insurance', icon: Heart },
    { text: '$3,000 Learning Budget', icon: Award },
    { text: 'Flexible Work Arrangements', icon: Globe },
    { text: 'Unlimited PTO', icon: Clock }
  ];

  const quickStats = [
    { label: 'Average Hire Time', value: '2 weeks', color: 'text-blue-600', icon: Clock },
    { label: 'Career Growth Rate', value: '85%', color: 'text-emerald-600', icon: TrendingUp },
    { label: 'Remote Flexibility', value: '100%', color: 'text-purple-600', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 -mt-10">
      <div className="max-w-6xl mx-auto px-4 pt-2 pb-8">
        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Welcome to Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We're building something amazing and we'd love for you to be part of it.
            </p>
          </motion.div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className={`w-10 h-10 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <p className="text-lg font-bold text-gray-900 mb-0.5">{stat.number}</p>
                <p className="text-gray-600 text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Company Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-6">
              <div className="mb-4">
                <p className="text-red-500 font-semibold text-xs tracking-wide uppercase mb-1">
                  WHY JOIN US?
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Company Culture
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Work in a dynamic environment where innovation thrives and careers flourish!
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-lg font-bold text-gray-900 mb-0.5">50+</p>
                  <p className="text-gray-600 text-xs">Team Members</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                  <p className="text-lg font-bold text-gray-900 mb-0.5">4.8/5</p>
                  <p className="text-gray-600 text-xs">Employee Rating</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-lg font-bold text-gray-900 mb-0.5">95%</p>
                  <p className="text-gray-600 text-xs">Retention Rate</p>
                </div>
              </div>
            </div>

            <div className="relative h-32 bg-gradient-to-r from-blue-100 to-purple-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-2 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <Handshake className="h-3 w-3 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Team Collaboration</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <Users className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-medium">Our Amazing Team</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Benefits & Perks</h3>
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <benefit.icon className="h-3 w-3 text-blue-600" />
                  <span className="font-medium text-gray-900 text-xs">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="space-y-2">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <stat.icon className={`h-3 w-3 ${stat.color}`} />
                    <span className="font-medium text-gray-700 text-xs">{stat.label}</span>
                  </div>
                  <span className={`font-bold ${stat.color} text-xs`}>{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-5 border border-gray-100 text-center"
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Welcome to Our <span className="text-blue-600">Team</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're building something amazing and we'd love for you to be part of it.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {companyStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <p className="text-lg font-bold text-gray-900 mb-0.5">{stat.number}</p>
                    <p className="text-gray-600 text-xs">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Join Us?</h3>
                <p className="text-gray-600 mb-3 text-sm">
                  We're always looking for talented individuals who share our passion.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-red-500 font-semibold text-xs tracking-wide uppercase mb-1">
                    WHY JOIN US?
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Company Culture
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Work in a dynamic environment where innovation thrives and careers flourish!
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-lg font-bold text-gray-900 mb-0.5">50+</p>
                    <p className="text-gray-600 text-xs">Team Members</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>
                    <p className="text-lg font-bold text-gray-900 mb-0.5">4.8/5</p>
                    <p className="text-gray-600 text-xs">Employee Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Heart className="h-4 w-4 text-red-500" />
                    </div>
                    <p className="text-lg font-bold text-gray-900 mb-0.5">95%</p>
                    <p className="text-gray-600 text-xs">Retention Rate</p>
                  </div>
                </div>
              </div>

              <div className="relative h-32 bg-gradient-to-r from-blue-100 to-purple-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <Handshake className="h-3 w-3 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Team Collaboration</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <Users className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-medium">Our Amazing Team</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Why Join Us?</h3>
              <div className="space-y-3">
                {companyStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`p-1.5 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-900">{stat.number}</p>
                      <p className="text-gray-600 text-xs">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Benefits & Perks</h3>
              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <benefit.icon className="h-3 w-3 text-blue-600" />
                    <span className="font-medium text-gray-900 text-xs">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-2">
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <stat.icon className={`h-3 w-3 ${stat.color}`} />
                      <span className="font-medium text-gray-700 text-xs">{stat.label}</span>
                    </div>
                    <span className={`font-bold ${stat.color} text-xs`}>{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;