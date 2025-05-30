
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Award, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Expert Recommendations",
      description: "AI-powered matching algorithm to find your perfect Kia vehicle"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Comprehensive Analysis",
      description: "Detailed questionnaire covering every aspect of your car needs"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personalized Service",
      description: "Tailored recommendations based on your lifestyle and preferences"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quick & Easy",
      description: "Get matched with your ideal Kia in just a few minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-xl">
                KIA
              </div>
              <span className="text-2xl font-bold text-gray-800">PickMyKia</span>
            </div>
            <Button 
              onClick={() => navigate('/dashboard')}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="block text-red-600">Kia Vehicle</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            PickMyKia is India's most advanced Kia car recommendation platform. 
            Answer a few questions and discover the Kia model that perfectly matches 
            your lifestyle, budget, and preferences.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/dashboard')}
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Car Matching
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Kia Models Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore All Kia Models Available in India
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/dbc93989-4e02-439e-bfaf-1e9fd7780ff4.png" 
              alt="Kia Models in India - Sonet, Seltos, Carens, EV6, Carnival"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
              <div className="w-full p-8 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-lg font-medium">
                  From compact SUVs to luxury MPVs - Find your perfect match from Kia's complete lineup
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PickMyKia Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose PickMyKia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PickMyKia is specially designed for Indian car buyers who want to make informed decisions. 
              Our platform understands local needs, road conditions, and preferences to recommend the best Kia vehicle for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-red-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Makes PickMyKia Special?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">India-Specific Recommendations</h3>
                    <p className="text-gray-600">Tailored for Indian road conditions, fuel preferences, and driving patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Complete Kia Portfolio</h3>
                    <p className="text-gray-600">Covers all Kia models and variants available in the Indian market</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Smart Matching Algorithm</h3>
                    <p className="text-gray-600">Advanced AI considers your budget, usage, preferences, and lifestyle</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dealer Connect</h3>
                    <p className="text-gray-600">Seamless connection with authorized Kia dealers across India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  Ready to Find Your Perfect Kia?
                </h3>
                <p className="text-red-700 mb-6">
                  Join thousands of satisfied customers who found their ideal Kia through our platform.
                </p>
                <Button 
                  size="lg"
                  onClick={() => navigate('/dashboard')}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-xl">
              KIA
            </div>
            <span className="text-2xl font-bold">PickMyKia</span>
          </div>
          <p className="text-gray-400">
            Find your perfect Kia vehicle with India's most advanced car recommendation platform.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
