
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Car, Fuel, Users, Zap } from "lucide-react";
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
      highlights: ["Compact", "Feature-rich", "City-friendly"]
    },
    {
      name: "Seltos",
      type: "Mid-size SUV", 
      priceRange: "₹10.90L - ₹20.45L",
      mileage: "Up to 20.8 km/l",
      seating: "5 Seater",
      fuel: "Petrol, Diesel",
      highlights: ["Spacious", "Tech-loaded", "Premium"]
    },
    {
      name: "Carens",
      type: "3-Row MPV",
      priceRange: "₹10.45L - ₹18.55L",
      mileage: "Up to 21.3 km/l",
      seating: "6/7 Seater",
      fuel: "Petrol, Diesel",
      highlights: ["Family-oriented", "Flexible seating", "Practical"]
    },
    {
      name: "EV6",
      type: "Electric SUV",
      priceRange: "₹60.95L - ₹65.95L",
      mileage: "Up to 528 km range",
      seating: "5 Seater",
      fuel: "Electric",
      highlights: ["Zero emission", "Ultra-fast charging", "Luxury"]
    },
    {
      name: "Carnival",
      type: "Premium MPV",
      priceRange: "₹35.99L - ₹38.99L",
      mileage: "Up to 14.1 km/l",
      seating: "7/8/9 Seater",
      fuel: "Diesel",
      highlights: ["Premium luxury", "Captain seats", "Business class"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-xl">
                  KIA
                </div>
                <span className="text-2xl font-bold text-gray-800">PickMyKia</span>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/questionnaire')}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Start Questionnaire
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Kia Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore all Kia models available in India and start your personalized car recommendation process. 
            Our intelligent questionnaire will help you find the perfect Kia that matches your needs, budget, and lifestyle.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/questionnaire')}
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Find My Perfect Kia
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Kia Models Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kia Models Available in India
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kiaModels.map((model, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {model.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      {model.type}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold text-red-600">{model.priceRange}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Fuel className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{model.mileage}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{model.seating}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <Zap className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{model.fuel}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {model.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How PickMyKia Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Answer Questions</h3>
              <p className="text-gray-600">
                Complete our comprehensive questionnaire about your preferences, usage, and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-gray-600">
                Our AI analyzes your responses and matches you with the perfect Kia model and variant.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Buy</h3>
              <p className="text-gray-600">
                Get connected with authorized Kia dealers and proceed with booking your dream car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
