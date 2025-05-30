
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Award, Users, Zap, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Expert Recommendations",
      description: "AI-powered matching algorithm to find your perfect Kia vehicle",
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-50 to-purple-100"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Comprehensive Analysis",
      description: "Detailed questionnaire covering every aspect of your car needs",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-100"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personalized Service",
      description: "Tailored recommendations based on your lifestyle and preferences",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-100"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quick & Easy",
      description: "Get matched with your ideal Kia in just a few minutes",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-100"
    }
  ];

  const whyPickMyKia = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smart Recommendations",
      description: "Find your perfect Kia match in minutes, not months",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trusted Platform",
      description: "Connected with authorized Kia dealers across India",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-100"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Complete Information",
      description: "Detailed specs, pricing, and feature comparisons",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Enhanced Header with Vibrant Colors */}
      <header className="bg-white shadow-2xl border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-pink-50 to-purple-50 opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold text-3xl shadow-2xl transform hover:scale-105 transition-transform">
                KIA
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-red-600 to-purple-600 bg-clip-text text-transparent">
                PickMyKia
              </span>
            </div>
            <Button 
              onClick={() => navigate('/dashboard')}
              className="bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 hover:from-pink-700 hover:via-red-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold border-2 border-transparent hover:border-white/20"
            >
              Get Started
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 via-red-100 to-purple-100 rounded-full text-sm font-medium mb-8 shadow-lg border-2 border-gradient-to-r from-pink-200 to-purple-200">
              <div className="bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 bg-clip-text text-transparent flex items-center">
                <Star className="h-5 w-5 mr-2 fill-current text-amber-400" />
                India's Most Intelligent Kia Recommendation Platform
              </div>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
              Find Your Perfect
              <br />
              <span className="text-5xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Kia Vehicle</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto mb-12 leading-relaxed">
              PickMyKia is India's most advanced Kia car recommendation platform. 
              Answer a few questions and discover the Kia model that perfectly matches 
              your lifestyle, budget, and preferences.
            </p>
            
            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg"
                onClick={() => navigate('/dashboard')}
                className="bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 hover:from-pink-700 hover:via-red-700 hover:to-purple-700 text-white text-xl px-12 py-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-white/20"
              >
                Start Car Matching
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

          {/* KIA Car Showcase with Provided Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img 
              src="/lovable-uploads/110e2af6-3da8-4c00-a9d7-4d104eb38095.png" 
              alt="Kia Models Collection - Latest Kia Cars in India"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="w-full p-8">
                <h3 className="text-white text-3xl font-bold mb-2">
                  Explore All Kia Models Available in India
                </h3>
                <p className="text-white/90 text-lg">
                  From compact SUVs to luxury MPVs - Find your perfect match from Kia's complete lineup
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PickMyKia Section with Vibrant Colors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-4">
              Why Choose PickMyKia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India's most trusted platform for finding your perfect Kia match
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyPickMyKia.map((item, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-white group overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${item.color}`}></div>
                <CardContent className="p-8 text-center">
                  <div className={`${item.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <div className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.icon}
                    </div>
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
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-6">
              What Makes PickMyKia Special?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PickMyKia is specially designed for Indian car buyers who want to make informed decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 bg-white overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.bgColor} rounded-full transform translate-x-16 -translate-y-16 opacity-50`}></div>
                <CardContent className="p-8 text-center relative">
                  <div className={`bg-gradient-to-br ${feature.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-2xl group-hover:scale-110 transition-transform`}>
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
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white via-purple-50 via-pink-50 to-white rounded-3xl p-16 shadow-2xl border-2 border-gradient-to-r from-purple-200 to-pink-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-100 via-pink-100 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-100 via-purple-100 to-transparent rounded-full transform -translate-x-32 translate-y-32"></div>
            <div className="relative">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-6 text-center">
                Ready to Find Your Perfect Kia?
              </h2>
              <p className="text-2xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
                Join thousands of satisfied customers who found their ideal Kia through our platform
              </p>
              <div className="text-center">
                <Button 
                  size="lg"
                  onClick={() => navigate('/dashboard')}
                  className="bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 hover:from-pink-700 hover:via-red-700 hover:to-purple-700 text-white text-xl px-12 py-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="ml-4 h-7 w-7" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold text-3xl shadow-2xl">
              KIA
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              PickMyKia
            </span>
          </div>
          <p className="text-gray-300 text-lg">
            Find your perfect Kia vehicle with India's most advanced car recommendation platform.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
