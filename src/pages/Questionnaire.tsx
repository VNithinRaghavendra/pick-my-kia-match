
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    budget: "",
    buyingTimeframe: "",
    city: "",
    
    // Usage & Purpose
    primaryUse: [],
    passengers: "",
    needSevenSeater: "",
    
    // Brand & Model Preference
    preferredModel: "",
    preferredVariant: "",
    
    // Fuel & Transmission
    fuelType: [],
    transmissionType: [],
    
    // Mileage & Performance
    expectedMileage: [15],
    turbocharged: "",
    acceleration: "",
    
    // Safety Requirements
    airbags: "",
    safetyFeatures: [],
    
    // Smart Features
    connectedCar: "",
    infotainmentFeatures: [],
    digitalCluster: "",
    
    // Comfort & Luxury
    sunroof: "",
    ventilatedSeats: "",
    interiorFeatures: [],
    
    // Aesthetics
    carColor: "",
    alloyWheels: "",
    interiorTheme: "",
    
    // Ownership
    exchange: "",
    financing: "",
    loanTenure: "",
    warranty: "",
    
    // Booking & Delivery
    deliveryTimeframe: "",
    bookingMethod: "",
    
    // Contact
    name: "",
    mobile: "",
    email: "",
    whatsappQuote: "",
    contactTime: ""
  });

  const totalSteps = 12;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form submission
      toast({
        title: "Questionnaire Completed!",
        description: "We're analyzing your preferences to find your perfect Kia match.",
      });
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="budget">What is your budget range?</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">₹5L - ₹10L</SelectItem>
                    <SelectItem value="10-15">₹10L - ₹15L</SelectItem>
                    <SelectItem value="15-25">₹15L - ₹25L</SelectItem>
                    <SelectItem value="25-40">₹25L - ₹40L</SelectItem>
                    <SelectItem value="40+">₹40L+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Are you looking to buy immediately or just exploring?</Label>
                <RadioGroup 
                  value={formData.buyingTimeframe} 
                  onValueChange={(value) => setFormData({...formData, buyingTimeframe: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="immediate" id="immediate" />
                    <Label htmlFor="immediate">Buy immediately (within 1 month)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="soon" id="soon" />
                    <Label htmlFor="soon">Within 2-3 months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="exploring" id="exploring" />
                    <Label htmlFor="exploring">Just exploring options</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="city">Preferred city/state for registration</Label>
                <Input 
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  placeholder="Enter your city"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Car Usage & Purpose</h2>
            
            <div className="space-y-4">
              <div>
                <Label>What will you primarily use the car for? (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["City commute", "Long highway drives", "Family trips", "Occasional use"].map((use) => (
                    <div key={use} className="flex items-center space-x-2">
                      <Checkbox 
                        id={use}
                        checked={formData.primaryUse.includes(use)}
                        onCheckedChange={(checked) => handleCheckboxChange('primaryUse', use, checked as boolean)}
                      />
                      <Label htmlFor={use}>{use}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="passengers">How many passengers do you usually carry?</Label>
                <Select value={formData.passengers} onValueChange={(value) => setFormData({...formData, passengers: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select passenger count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 passengers</SelectItem>
                    <SelectItem value="3-4">3-4 passengers</SelectItem>
                    <SelectItem value="5-6">5-6 passengers</SelectItem>
                    <SelectItem value="7+">7+ passengers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Do you need a 7-seater vehicle?</Label>
                <RadioGroup 
                  value={formData.needSevenSeater} 
                  onValueChange={(value) => setFormData({...formData, needSevenSeater: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="seven-yes" />
                    <Label htmlFor="seven-yes">Yes, definitely need 7 seats</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="seven-maybe" />
                    <Label htmlFor="seven-maybe">Maybe, would be nice to have</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="seven-no" />
                    <Label htmlFor="seven-no">No, 5 seats are sufficient</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand & Model Preference</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="model">Do you already have a specific Kia model in mind?</Label>
                <Select value={formData.preferredModel} onValueChange={(value) => setFormData({...formData, preferredModel: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sonet">Kia Sonet</SelectItem>
                    <SelectItem value="seltos">Kia Seltos</SelectItem>
                    <SelectItem value="carens">Kia Carens</SelectItem>
                    <SelectItem value="ev6">Kia EV6</SelectItem>
                    <SelectItem value="carnival">Kia Carnival</SelectItem>
                    <SelectItem value="no-preference">No specific preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="variant">What is your preferred variant/trim level?</Label>
                <Select value={formData.preferredVariant} onValueChange={(value) => setFormData({...formData, preferredVariant: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred variant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="base">Base variant (HTE/HT Line)</SelectItem>
                    <SelectItem value="mid">Mid variant (HTK+/HTK+ (O))</SelectItem>
                    <SelectItem value="high">High variant (HTX/HTX+)</SelectItem>
                    <SelectItem value="top">Top variant (GTX+/X-Line)</SelectItem>
                    <SelectItem value="no-preference">No specific preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fuel & Transmission Options</h2>
            
            <div className="space-y-4">
              <div>
                <Label>Preferred fuel type (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["Petrol", "Diesel", "CNG", "Electric"].map((fuel) => (
                    <div key={fuel} className="flex items-center space-x-2">
                      <Checkbox 
                        id={fuel}
                        checked={formData.fuelType.includes(fuel)}
                        onCheckedChange={(checked) => handleCheckboxChange('fuelType', fuel, checked as boolean)}
                      />
                      <Label htmlFor={fuel}>{fuel}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>Preferred transmission type (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["Manual", "Automatic", "iMT (Clutchless Manual)", "CVT"].map((transmission) => (
                    <div key={transmission} className="flex items-center space-x-2">
                      <Checkbox 
                        id={transmission}
                        checked={formData.transmissionType.includes(transmission)}
                        onCheckedChange={(checked) => handleCheckboxChange('transmissionType', transmission, checked as boolean)}
                      />
                      <Label htmlFor={transmission}>{transmission}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mileage & Performance</h2>
            
            <div className="space-y-4">
              <div>
                <Label>Expected mileage (km/l): {formData.expectedMileage[0]} km/l</Label>
                <Slider
                  value={formData.expectedMileage}
                  onValueChange={(value) => setFormData({...formData, expectedMileage: value})}
                  max={30}
                  min={10}
                  step={1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Do you want a turbocharged engine?</Label>
                <RadioGroup 
                  value={formData.turbocharged} 
                  onValueChange={(value) => setFormData({...formData, turbocharged: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="turbo-yes" />
                    <Label htmlFor="turbo-yes">Yes, prefer turbocharged</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="turbo-no" />
                    <Label htmlFor="turbo-no">No preference</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="na" id="turbo-na" />
                    <Label htmlFor="turbo-na">Prefer naturally aspirated</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>Is high pickup/acceleration important for you?</Label>
                <RadioGroup 
                  value={formData.acceleration} 
                  onValueChange={(value) => setFormData({...formData, acceleration: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very" id="accel-very" />
                    <Label htmlFor="accel-very">Very important</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="somewhat" id="accel-somewhat" />
                    <Label htmlFor="accel-somewhat">Somewhat important</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not" id="accel-not" />
                    <Label htmlFor="accel-not">Not important</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      // Continue with remaining steps (6-12)...
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety Requirements</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="airbags">Minimum number of airbags required?</Label>
                <Select value={formData.airbags} onValueChange={(value) => setFormData({...formData, airbags: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select minimum airbags" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 airbags</SelectItem>
                    <SelectItem value="4">4 airbags</SelectItem>
                    <SelectItem value="6">6 airbags</SelectItem>
                    <SelectItem value="6+">6+ airbags</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Must-have safety features (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["ABS with EBD", "Hill Start Assist", "ESP", "Rear parking camera", "ADAS", "Electronic Stability Control"].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox 
                        id={feature}
                        checked={formData.safetyFeatures.includes(feature)}
                        onCheckedChange={(checked) => handleCheckboxChange('safetyFeatures', feature, checked as boolean)}
                      />
                      <Label htmlFor={feature}>{feature}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact & Follow-Up</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Your name</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="mobile">Mobile number</Label>
                <Input 
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label>Would you like a quote on WhatsApp?</Label>
                <RadioGroup 
                  value={formData.whatsappQuote} 
                  onValueChange={(value) => setFormData({...formData, whatsappQuote: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="whatsapp-yes" />
                    <Label htmlFor="whatsapp-yes">Yes, send quote on WhatsApp</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="whatsapp-no" />
                    <Label htmlFor="whatsapp-no">No, prefer email/call</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="contactTime">Preferred time to be contacted by a dealer</Label>
                <Select value={formData.contactTime} onValueChange={(value) => setFormData({...formData, contactTime: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred contact time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step {currentStep}</h2>
            <p className="text-gray-600">This step is under construction. More questions coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-xl">
                  KIA
                </div>
                <span className="text-2xl font-bold text-gray-800">PickMyKia</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span>Car Recommendation Questionnaire</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {renderStep()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>
              
              <Button 
                onClick={handleNext}
                className="bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2"
              >
                <span>{currentStep === totalSteps ? 'Complete' : 'Next'}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Questionnaire;
