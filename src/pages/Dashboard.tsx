
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Car, Fuel, Users, Zap, Star, Shield, Award } from "lucide-react";
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
      highlights: ["Compact", "Feature-rich", "City-friendly"],
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=250&fit=crop&crop=center",
      description: "Perfect for urban commuting with modern features and efficient performance."
    },
    {
      name: "Seltos",
      type: "Mid-size SUV", 
      priceRange: "₹10.90L - ₹20.45L",
      mileage: "Up to 20.8 km/l",
      seating: "5 Seater",
      fuel: "Petrol, Diesel",
      highlights: ["Spacious", "Tech-loaded", "Premium"],
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop&crop=center",
      description: "A feature-packed SUV that combines style, comfort, and advanced technology."
    },
    {
      name: "Carens",
      type: "3-Row MPV",
      priceRange: "₹10.45L - ₹18.55L",
      mileage: "Up to 21.3 km/l",
      seating: "6/7 Seater",
      fuel: "Petrol, Diesel",
      highlights: ["Family-oriented", "Flexible seating", "Practical"],
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=250&fit=crop&crop=center",
      description: "The perfect family vehicle with flexible seating and ample space for all occasions."
    },
    {
      name: "EV6",
      type: "Electric SUV",
      priceRange: "₹60.95L - ₹65.95L",
      mileage: "Up to 528 km range",
      seating: "5 Seater",
      fuel: "Electric",
      highlights: ["Zero emission", "Ultra-fast charging", "Luxury"],
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=250&fit=crop&crop=center",
      description: "Experience the future of mobility with cutting-edge electric technology and luxury."
    },
    {
      name: "Carnival",
      type: "Premium MPV",
      priceRange: "₹35.99L - ₹38.99L",
      mileage: "Up to 14.1 km/l",
      seating: "7/8/9 Seater",
      fuel: "Diesel",
      highlights: ["Premium luxury", "Captain seats", "Business class"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      description: "Ultimate luxury MPV with premium features and spacious comfort for large families."
    }
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithm analyzes your preferences to recommend the perfect Kia"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Comprehensive Analysis", 
      description: "Detailed questionnaire covering every aspect of your automotive needs"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Personalized Results",
      description: "Get recommendations tailored specifically to your lifestyle and budget"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Enhanced Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-xl font-bold text-2xl shadow-lg">
                  KIA
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
                  PickMyKia
                </span>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/questionnaire')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Questionnaire
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Welcome Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" />
            India's #1 Kia Recommendation Platform
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-red-600 bg-clip-text text-transparent mb-6">
            Welcome to Your Kia Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            Discover the perfect Kia vehicle tailored to your unique needs, lifestyle, and budget. 
            Our intelligent questionnaire analyzes your preferences across 12 comprehensive categories 
            to match you with your ideal Kia model and variant.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/questionnaire')}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Find My Perfect Kia
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>

        {/* Enhanced Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-red-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Kia Models Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Kia Models in India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From compact city SUVs to luxury electric vehicles, discover the complete Kia lineup 
              available in the Indian market with detailed specifications and features.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {kiaModels.map((model, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden bg-white group">
                <div className="relative overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={`Kia ${model.name}`}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white px-3 py-1 text-sm font-medium">
                      {model.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Kia {model.name}
                    </CardTitle>
                  </div>
                  <p className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    {model.priceRange}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    {model.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Fuel className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Mileage</p>
                        <p className="text-sm font-semibold text-gray-700">{model.mileage}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Users className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Seating</p>
                        <p className="text-sm font-semibold text-gray-700">{model.seating}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg col-span-2">
                      <Zap className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Fuel Options</p>
                        <p className="text-sm font-semibold text-gray-700">{model.fuel}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {model.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs px-3 py-1 bg-red-50 text-red-700 border border-red-200">
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
        <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-12 shadow-xl border border-red-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            How PickMyKia Works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our intelligent 3-step process ensures you find the perfect Kia that matches your exact requirements
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Answer Questions</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete our comprehensive 12-step questionnaire covering your preferences, 
                budget, usage patterns, and lifestyle requirements.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Matched</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI-powered algorithm analyzes your responses and matches you with 
                the perfect Kia model, variant, and configuration.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Connect & Buy</h3>
              <p className="text-gray-600 leading-relaxed">
                Get connected with authorized Kia dealers in your area and 
                proceed with booking your dream car with exclusive offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
