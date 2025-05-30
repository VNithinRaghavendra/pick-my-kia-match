
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Car, Fuel, Users, Zap, Star, Shield, Award, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const kiaModels = [
    {
      name: "Sonet",
      type: "Compact SUV",
      priceRange: "₹7.15L - ₹13.45L",
      mileage: "Up to 24.1 km/l",
      seating: "5 Seater",
      fuel: "Petrol, Diesel",
      highlights: ["Compact Design", "Feature-rich Interior", "City-friendly Size"],
      image: "/lovable-uploads/5c69609d-1658-47b0-bbd9-f51bc110facd.png",
      description: "Perfect urban companion with bold design and advanced connectivity features.",
      keyFeatures: ["10.25\" Touchscreen", "Wireless Charging", "UVO Connect", "LED DRLs"]
    },
    {
      name: "Seltos",
      type: "Mid-size SUV", 
      priceRange: "₹10.90L - ₹20.45L",
      mileage: "Up to 20.8 km/l",
      seating: "5 Seater",
      fuel: "Petrol, Diesel",
      highlights: ["Spacious Cabin", "Tech-loaded Features", "Premium Design"],
      image: "/lovable-uploads/5c69609d-1658-47b0-bbd9-f51bc110facd.png",
      description: "Award-winning SUV that combines style, technology, and performance seamlessly.",
      keyFeatures: ["Bose Audio", "Ventilated Seats", "360° Camera", "Smart Pure Air Purifier"]
    },
    {
      name: "Carens",
      type: "3-Row MPV",
      priceRange: "₹10.45L - ₹18.55L",
      mileage: "Up to 21.3 km/l",
      seating: "6/7 Seater",
      fuel: "Petrol, Diesel",
      highlights: ["Family-oriented", "Flexible Seating", "Premium Comfort"],
      image: "/lovable-uploads/5c69609d-1658-47b0-bbd9-f51bc110facd.png",
      description: "The ultimate family vehicle with recreational vehicle design and premium comfort.",
      keyFeatures: ["3-Row Seating", "Captain Seats", "Ambient Lighting", "Premium Interiors"]
    },
    {
      name: "EV6",
      type: "Electric SUV",
      priceRange: "₹60.95L - ₹65.95L",
      mileage: "Up to 528 km range",
      seating: "5 Seater",
      fuel: "Electric",
      highlights: ["Zero Emission", "Ultra-fast Charging", "Luxury Features"],
      image: "/lovable-uploads/5c69609d-1658-47b0-bbd9-f51bc110facd.png",
      description: "Revolutionary electric SUV with cutting-edge technology and sustainable luxury.",
      keyFeatures: ["800V Fast Charging", "AR HUD", "Premium Sound", "Advanced ADAS"]
    },
    {
      name: "Carnival",
      type: "Premium MPV",
      priceRange: "₹35.99L - ₹38.99L",
      mileage: "Up to 14.1 km/l",
      seating: "7/8/9 Seater",
      fuel: "Diesel",
      highlights: ["Premium Luxury", "Business Class Seating", "Advanced Safety"],
      image: "/lovable-uploads/5c69609d-1658-47b0-bbd9-f51bc110facd.png",
      description: "Flagship luxury MPV designed for discerning families who demand the finest.",
      keyFeatures: ["VIP Lounge Seats", "Dual Sunroof", "Premium Audio", "Advanced Safety Suite"]
    }
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithm analyzes 12+ factors to recommend your perfect Kia match",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Comprehensive Analysis", 
      description: "Detailed questionnaire covering budget, usage, features, and lifestyle preferences",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Personalized Results",
      description: "Get tailored recommendations with variant suggestions and dealer connections",
      color: "from-green-500 to-green-600"
    }
  ];

  const whyPickMyKia = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smart Recommendations",
      description: "Find your perfect Kia match in minutes, not months"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trusted Platform",
      description: "Connected with authorized Kia dealers across India"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Complete Information",
      description: "Detailed specs, pricing, and feature comparisons"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Enhanced Header with Gradient */}
      <header className="bg-white shadow-xl border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 hover:bg-gray-50 transition-colors px-4 py-2 rounded-xl"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-2xl font-bold text-3xl shadow-xl transform hover:scale-105 transition-transform">
                  KIA
                </div>
                <span className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
                  PickMyKia
                </span>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/questionnaire')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Start Your Journey
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section with Enhanced Design */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-red-200 text-red-800 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Star className="h-5 w-5 mr-2 fill-current" />
            India's Most Intelligent Kia Recommendation Platform
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-red-600 bg-clip-text text-transparent mb-8 leading-tight">
            Find Your Perfect Kia
            <br />
            <span className="text-5xl">In Just 5 Minutes</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto mb-12 leading-relaxed">
            PickMyKia uses advanced AI to analyze your lifestyle, budget, and preferences across 
            12 comprehensive categories to match you with your ideal Kia model and variant.
          </p>
          
          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => navigate('/questionnaire')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl px-12 py-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Find My Perfect Kia
              <ArrowRight className="ml-4 h-7 w-7" />
            </Button>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-500 mb-1">Over 50,000+ happy customers</p>
              <div className="flex items-center justify-center sm:justify-start space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why PickMyKia Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose PickMyKia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India's most trusted platform for finding your perfect Kia match
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyPickMyKia.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-red-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              <CardContent className="p-8 text-center">
                <div className={`bg-gradient-to-br ${feature.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Kia Models Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Complete Kia Lineup in India
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              From compact city SUVs to luxury electric vehicles, explore every Kia model 
              available in India with detailed specifications and advanced features.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {kiaModels.map((model, index) => (
              <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 overflow-hidden bg-white group">
                <div className="relative overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={`Kia ${model.name}`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg">
                      {model.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-red-600 px-3 py-1 text-xs font-bold rounded-full shadow-lg">
                      NEW
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-3xl font-bold text-gray-900">
                      Kia {model.name}
                    </CardTitle>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">
                    {model.priceRange}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {model.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-red-50 rounded-xl">
                      <Fuel className="h-6 w-6 text-red-600" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Mileage</p>
                        <p className="text-sm font-bold text-gray-700">{model.mileage}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-red-50 rounded-xl">
                      <Users className="h-6 w-6 text-red-600" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Seating</p>
                        <p className="text-sm font-bold text-gray-700">{model.seating}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-red-50 rounded-xl col-span-2">
                      <Zap className="h-6 w-6 text-red-600" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Fuel Options</p>
                        <p className="text-sm font-bold text-gray-700">{model.fuel}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {model.keyFeatures.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs px-3 py-2 bg-red-50 text-red-700 border border-red-200 rounded-lg">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {model.highlights.map((highlight, i) => (
                      <Badge key={i} variant="outline" className="text-xs px-3 py-2 border-red-300 text-red-600 hover:bg-red-50 transition-colors">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced How It Works Section */}
        <div className="bg-gradient-to-br from-white via-red-50 to-white rounded-3xl p-16 shadow-2xl border border-red-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-100 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-100 to-transparent rounded-full transform -translate-x-32 translate-y-32"></div>
          <div className="relative">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center">
              How PickMyKia Works
            </h2>
            <p className="text-2xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
              Our intelligent 3-step process ensures you find the perfect Kia that matches your exact requirements
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-white font-bold text-3xl">1</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Answer Questions</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Complete our comprehensive 12-step questionnaire covering your preferences, 
                  budget, usage patterns, and lifestyle requirements.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-white font-bold text-3xl">2</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Get Matched</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our AI-powered algorithm analyzes your responses and matches you with 
                  the perfect Kia model, variant, and configuration.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-white font-bold text-3xl">3</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Connect & Buy</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Get connected with authorized Kia dealers in your area and 
                  proceed with booking your dream car with exclusive offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
