
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Phone, Mail, MapPin, Fuel, Users, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();

  const recommendedCar = {
    name: "Kia Seltos",
    variant: "HTX+ Diesel AT",
    price: "₹17.89 Lakh",
    matchPercentage: 92,
    image: "/lovable-uploads/dbc93989-4e02-439e-bfaf-1e9fd7780ff4.png",
    specifications: {
      engine: "1.5L Diesel Turbo",
      power: "115 PS",
      torque: "250 Nm",
      mileage: "20.8 km/l",
      seating: "5 Seater",
      fuelTank: "50L",
      transmission: "6-Speed Automatic"
    },
    features: [
      "10.25-inch Touchscreen",
      "Bose Premium Audio",
      "Ventilated Front Seats",
      "360-degree Camera",
      "Wireless Charging",
      "Smart Pure Air Purifier",
      "LED DRLs",
      "UVO Connect"
    ],
    whyRecommended: [
      "Perfect match for your budget range of ₹15L-₹20L",
      "Excellent fuel efficiency for highway drives",
      "Premium features for tech-savvy users",
      "Spacious for family use with 5-seater comfort",
      "High safety rating with 6 airbags"
    ]
  };

  const alternativeOptions = [
    {
      name: "Kia Sonet",
      variant: "GTX+ Turbo DCT",
      price: "₹13.45 Lakh",
      matchPercentage: 85,
      reason: "More affordable with similar features"
    },
    {
      name: "Kia Carens",
      variant: "Luxury Plus 7-Seater",
      price: "₹16.99 Lakh", 
      matchPercentage: 78,
      reason: "Better for larger families needing 7 seats"
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
                onClick={() => navigate('/questionnaire')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Questions</span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-xl">
                  KIA
                </div>
                <span className="text-2xl font-bold text-gray-800">PickMyKia</span>
              </div>
            </div>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open('tel:+911234567890')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Dealer
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Perfect Kia Match!
          </h1>
          <p className="text-xl text-gray-600">
            Based on your preferences, we've found the ideal Kia vehicle for you.
          </p>
        </div>

        {/* Main Recommendation */}
        <Card className="border-0 shadow-2xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold mb-2">{recommendedCar.name}</h2>
                <p className="text-xl opacity-90">{recommendedCar.variant}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="h-6 w-6 fill-current" />
                  <span className="text-2xl font-bold">{recommendedCar.matchPercentage}% Match</span>
                </div>
                <p className="text-3xl font-bold">{recommendedCar.price}</p>
              </div>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Car Image */}
              <div className="relative">
                <img 
                  src={recommendedCar.image}
                  alt={recommendedCar.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                  Best Match
                </Badge>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Specifications</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-600">Engine</p>
                      <p className="font-semibold">{recommendedCar.specifications.engine}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-600">Mileage</p>
                      <p className="font-semibold">{recommendedCar.specifications.mileage}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-600">Seating</p>
                      <p className="font-semibold">{recommendedCar.specifications.seating}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm text-gray-600">Transmission</p>
                      <p className="font-semibold">{recommendedCar.specifications.transmission}</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-red-600 hover:bg-red-700 text-white flex-1">
                    <Phone className="mr-2 h-4 w-4" />
                    Book Test Drive
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Mail className="mr-2 h-4 w-4" />
                    Get Brochure
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why This Car */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Why We Recommend This Car</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {recommendedCar.whyRecommended.map((reason, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {recommendedCar.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-3">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alternative Options */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Alternative Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {alternativeOptions.map((car, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                      <p className="text-gray-600">{car.variant}</p>
                      <p className="text-2xl font-bold text-red-600 mt-2">{car.price}</p>
                    </div>
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      {car.matchPercentage}% Match
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4">{car.reason}</p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Dealer Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mt-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Drive Your Dream Kia?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Connect with our authorized Kia dealers to book a test drive and get the best deals.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open('tel:+911234567890')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('mailto:info@pickmykia.com')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://maps.google.com')}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Find Dealer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
