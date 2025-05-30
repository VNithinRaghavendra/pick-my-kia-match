
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
    { id: "city-commute", label: "City commute", icon: <Car className="h-4 w-4" /> },
    { id: "highway-drives", label: "Long highway drives", icon: <Route className="h-4 w-4" /> },
    { id: "family-trips", label: "Family trips", icon: <Users className="h-4 w-4" /> },
    { id: "occasional-use", label: "Occasional use", icon: <MapPin className="h-4 w-4" /> }
  ];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center space-x-3 text-2xl">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Car className="h-6 w-6 text-blue-600" />
          </div>
          <span>Car Usage & Purpose</span>
        </CardTitle>
        <p className="text-gray-600 mt-2">Tell us how you plan to use your car</p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <Label className="text-base font-semibold">
            What will you primarily use the car for? (Select all that apply)
          </Label>
          <div className="grid md:grid-cols-2 gap-4">
            {usageOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                <Checkbox 
                  id={option.id}
                  checked={formData.primaryUse.includes(option.label)}
                  onCheckedChange={(checked) => handleCheckboxChange('primaryUse', option.label, checked as boolean)}
                />
                <div className="flex items-center space-x-2">
                  {option.icon}
                  <Label htmlFor={option.id} className="cursor-pointer">{option.label}</Label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Label htmlFor="passengers" className="text-base font-semibold flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span>How many passengers do you usually carry?</span>
            </Label>
            <Select value={formData.passengers} onValueChange={(value) => setFormData({...formData, passengers: value})}>
              <SelectTrigger className="h-12">
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
            <Label className="text-base font-semibold">Do you need a 7-seater vehicle?</Label>
            <RadioGroup 
              value={formData.needSevenSeater} 
              onValueChange={(value) => setFormData({...formData, needSevenSeater: value})}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
                <RadioGroupItem value="yes" id="seven-yes" />
                <Label htmlFor="seven-yes" className="cursor-pointer">Yes, definitely need 7 seats</Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
                <RadioGroupItem value="maybe" id="seven-maybe" />
                <Label htmlFor="seven-maybe" className="cursor-pointer">Maybe, would be nice to have</Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-blue-50 transition-colors">
                <RadioGroupItem value="no" id="seven-no" />
                <Label htmlFor="seven-no" className="cursor-pointer">No, 5 seats are sufficient</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsagePurposeStep;
