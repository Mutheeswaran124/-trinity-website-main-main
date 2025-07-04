import { useState } from 'react';
import { TrendingUp, Database, ExternalLink, Building2 } from 'lucide-react';
import TrinityIcon from '../../Assets/trinity.png';

function App() {
  const [selectedBusiness, setSelectedBusiness] = useState<number>(1);

  const businesses = [
    {
      id: 1,
      name: "Hotelierlinks",
      shortDescription: "Hotelierlinks specializes in transforming the hospitality industry through innovative technology solutions that seamlessly connect hotels with cutting-edge management systems. Our comprehensive platform integrates property management, guest services, and operational analytics to create exceptional experiences for both guests and hotel staff. We partner with leading hospitality brands to implement scalable solutions that drive revenue growth, enhance guest satisfaction, and streamline daily operations across all property types.",
      logo: "https://hotelierlinks.com/wp-content/uploads/2022/08/Footer-Logo.png",
      website: "https://hotelierlinks.com/about-us/",
      industry: "Hospitality Technology"
    },
    {
      id: 2,
      name: "GrowthPulse",
      shortDescription: "GrowthPulse is a full-service digital marketing agency that specializes in driving measurable business growth through strategic online presence optimization. We combine creative marketing campaigns with advanced analytics to deliver results that matter. Our team of experts crafts personalized marketing strategies that encompass social media marketing, search engine optimization, content creation, and conversion rate optimization. We work closely with businesses of all sizes to build strong brand identities and sustainable growth trajectories in the digital landscape.",
      logo: null,
      website: "#",
      industry: "Digital Marketing",
      icon: TrendingUp,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 3,
      name: "TNova",
      shortDescription: "TNova is a leading provider of ERPNext implementation and customization services, dedicated to streamlining business operations through intelligent enterprise resource planning solutions. We specialize in end-to-end ERP implementations that integrate seamlessly with existing business processes, providing real-time insights and automated workflows. Our experienced consultants work with organizations to optimize their operations, improve data visibility, and enhance decision-making capabilities through tailored ERPNext solutions that scale with business growth.",
      logo: TrinityIcon,
      website: "#",
      industry: "ERP Solutions",
      icon: Database,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const handleLogoClick = (id: number) => setSelectedBusiness(id);
  const handleVisitWebsite = (url: string) => {
    if (url !== "#") window.open(url, "_blank");
  };

  const selectedBusinessData = businesses.find(b => b.id === selectedBusiness)!;

  const LogoComponent = ({ business, isSelected = false }: { business: typeof businesses[0], isSelected?: boolean }) => {
    if (business.logo) {
      return (
        <img
          src={business.logo}
          alt={`${business.name} logo`}
          className={`h-12 w-auto object-contain transition-transform duration-300 ${isSelected ? 'scale-105' : ''}`}
        />
      );
    }

    const Icon = business.icon!;
    return (
      <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${business.color} flex items-center justify-center shadow-md`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    );
  };

  return (
    <div className="min-h-screen relative bg-white overflow-hidden">
      {/* Dotted & shimmer background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer [background-size:200%_100%]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 py-12 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800">Our Business Portfolio</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our innovative companies delivering cutting-edge solutions across multiple industries.
            </p>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {businesses.map(business => (
              <div
                key={business.id}
                onClick={() => handleLogoClick(business.id)}
                className={`cursor-pointer bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition ${
                  selectedBusiness === business.id ? 'border-blue-400 ring-2 ring-blue-200' : 'border-gray-200'
                }`}
              >
                <div className="mb-4 flex justify-center">
                  <LogoComponent business={business} isSelected={selectedBusiness === business.id} />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{business.name}</h3>
                <p className="text-sm text-gray-600">{business.industry}</p>
              </div>
            ))}
          </div>

          {/* Business Detail */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-xl shadow-sm">
                  <LogoComponent business={selectedBusinessData} isSelected={true} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedBusinessData.name}</h2>
                  <p className="text-gray-600">{selectedBusinessData.industry}</p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  {selectedBusinessData.shortDescription}
                </p>

                <button
                  onClick={() => handleVisitWebsite(selectedBusinessData.website)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={selectedBusinessData.website === "#"}
                >
                  <ExternalLink className="w-4 h-4" />
                  {selectedBusinessData.website === "#" ? "Coming Soon" : "Visit Website"}
                </button>
              </div>
            </div>
          </div>

        
          </div>
        </div>
      </div>
    
  );
}

export default App;
