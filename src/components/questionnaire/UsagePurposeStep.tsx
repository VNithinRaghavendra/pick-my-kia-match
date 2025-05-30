
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Users, MapPin, Route } from "lucide-react";

interface UsagePurposeStepProps {
  formData: any;
  setFormData: (data: any) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
}

const UsagePurposeStep = ({ formData, setFormData, handleCheckboxChange }: UsagePurposeStepProps) => {
  const usageOptions = [
    { id: "city-commute", label: "City commute", icon: <Car className="h-4 w-4" />, color: "from-blue-500 to-cyan-500" },
    { id: "highway-drives", label: "Long highway drives", icon: <Route className="h-4 w-4" />, color: "from-green-500 to-emerald-500" },
    { id: "family-trips", label: "Family trips", icon: <Users className="h-4 w-4" />, color: "from-purple-500 to-violet-500" },
    { id: "occasional-use", label: "Occasional use", icon: <MapPin className="h-4 w-4" />, color: "from-orange-500 to-red-500" }
  ];

  return (
    <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50">
      <CardHeader className="pb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-3 text-2xl">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <Car className="h-6 w-6 text-white" />
          </div>
          <span>Car Usage & Purpose</span>
        </CardTitle>
        <p className="text-blue-100 mt-2">Tell us how you plan to use your car</p>
      </CardHeader>
      <CardContent className="space-y-8 p-8">
        <div className="space-y-4">
          <Label className="text-base font-semibold text-gray-800">
            What will you primarily use the car for? (Select all that apply)
          </Label>
          <div className="grid md:grid-cols-2 gap-4">
            {usageOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-3 p-4 border-2 rounded-xl hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:from-blue-50 hover:to-purple-50 border-gray-200 hover:border-blue-300">
                <Checkbox 
                  id={option.id}
                  checked={formData.primaryUse.includes(option.label)}
                  onCheckedChange={(checked) => handleCheckboxChange('primaryUse', option.label, checked as boolean)}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-600"
                />
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${option.color} text-white shadow-lg`}>
                    {option.icon}
                  </div>
                  <Label htmlFor={option.id} className="cursor-pointer font-medium text-gray-700">{option.label}</Label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Label htmlFor="passengers" className="text-base font-semibold flex items-center space-x-2 text-gray-800">
              <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span>How many passengers do you usually carry?</span>
            </Label>
            <Select value={formData.passengers} onValueChange={(value) => setFormData({...formData, passengers: value})}>
              <SelectTrigger className="h-12 border-2 border-gray-200 hover:border-blue-400 transition-colors bg-gradient-to-r from-white to-gray-50">
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

          <div className="space-y-4">
            <Label className="text-base font-semibold text-gray-800">Do you need a 7-seater vehicle?</Label>
            <RadioGroup 
              value={formData.needSevenSeater} 
              onValueChange={(value) => setFormData({...formData, needSevenSeater: value})}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 p-3 border-2 rounded-xl hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-white to-green-50 hover:from-green-50 hover:to-emerald-50 border-gray-200 hover:border-green-300">
                <RadioGroupItem value="yes" id="seven-yes" className="border-green-500 text-green-600" />
                <Label htmlFor="seven-yes" className="cursor-pointer font-medium text-gray-700">Yes, definitely need 7 seats</Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border-2 rounded-xl hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-white to-yellow-50 hover:from-yellow-50 hover:to-orange-50 border-gray-200 hover:border-yellow-300">
                <RadioGroupItem value="maybe" id="seven-maybe" className="border-yellow-500 text-yellow-600" />
                <Label htmlFor="seven-maybe" className="cursor-pointer font-medium text-gray-700">Maybe, would be nice to have</Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border-2 rounded-xl hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-white to-red-50 hover:from-red-50 hover:to-pink-50 border-gray-200 hover:border-red-300">
                <RadioGroupItem value="no" id="seven-no" className="border-red-500 text-red-600" />
                <Label htmlFor="seven-no" className="cursor-pointer font-medium text-gray-700">No, 5 seats are sufficient</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsagePurposeStep;
