
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import BasicInfoStep from "@/components/questionnaire/BasicInfoStep";
import UsagePurposeStep from "@/components/questionnaire/UsagePurposeStep";
import ContactStep from "@/components/questionnaire/ContactStep";

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
    
    // Contact
    name: "",
    mobile: "",
    email: "",
    whatsappQuote: "",
    contactTime: ""
  });

  const totalSteps = 3; // Simplified for demo

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form submission
      toast({
        title: "Questionnaire Completed! 🎉",
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

  const getStepTitle = () => {
    switch(currentStep) {
      case 1: return "Basic Information";
      case 2: return "Usage & Purpose";
      case 3: return "Contact Details";
      default: return "Questionnaire";
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <BasicInfoStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <UsagePurposeStep formData={formData} setFormData={setFormData} handleCheckboxChange={handleCheckboxChange} />;
      case 3:
        return <ContactStep formData={formData} setFormData={setFormData} />;
      default:
        return <BasicInfoStep formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
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
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>~5 minutes</span>
              </div>
              <div className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                Step {currentStep} of {totalSteps}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Progress Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {getStepTitle()}
            </h1>
            <p className="text-xl text-gray-600">
              Help us understand your preferences to find your perfect Kia
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-red-600">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-red-600 to-red-700 h-3 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center space-x-8 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  step < currentStep ? 'bg-green-600 text-white' :
                  step === currentStep ? 'bg-red-600 text-white' :
                  'bg-gray-200 text-gray-500'
                }`}>
                  {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-20 h-1 mx-4 transition-all duration-300 ${
                    step < currentStep ? 'bg-green-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Question Step */}
        <div className="mb-12">
          {renderStep()}
        </div>
        
        {/* Enhanced Navigation Buttons */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 px-6 py-3 border-2 hover:bg-gray-50 disabled:opacity-50 transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              {currentStep} of {totalSteps} steps
            </span>
            <Button 
              onClick={handleNext}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white flex items-center space-x-2 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>{currentStep === totalSteps ? 'Complete Questionnaire' : 'Next Step'}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
