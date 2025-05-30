
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, DollarSign, Calendar, MapPin } from "lucide-react";

interface BasicInfoStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

const BasicInfoStep = ({ formData, setFormData }: BasicInfoStepProps) => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center space-x-3 text-2xl">
          <div className="bg-red-100 p-2 rounded-lg">
            <User className="h-6 w-6 text-red-600" />
          </div>
          <span>Basic Information</span>
        </CardTitle>
        <p className="text-gray-600 mt-2">Let's start with your basic requirements and preferences</p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Label htmlFor="budget" className="text-base font-semibold flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-red-600" />
              <span>What is your budget range?</span>
            </Label>
            <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select your budget range" />
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

          <div className="space-y-3">
            <Label htmlFor="city" className="text-base font-semibold flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-red-600" />
              <span>Preferred city/state for registration</span>
            </Label>
            <Input 
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              placeholder="Enter your city"
              className="h-12"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-base font-semibold flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-red-600" />
            <span>Are you looking to buy immediately or just exploring?</span>
          </Label>
          <RadioGroup 
            value={formData.buyingTimeframe} 
            onValueChange={(value) => setFormData({...formData, buyingTimeframe: value})}
            className="grid md:grid-cols-3 gap-4"
          >
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-red-50 transition-colors">
              <RadioGroupItem value="immediate" id="immediate" />
              <Label htmlFor="immediate" className="cursor-pointer">Buy immediately (within 1 month)</Label>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-red-50 transition-colors">
              <RadioGroupItem value="soon" id="soon" />
              <Label htmlFor="soon" className="cursor-pointer">Within 2-3 months</Label>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-red-50 transition-colors">
              <RadioGroupItem value="exploring" id="exploring" />
              <Label htmlFor="exploring" className="cursor-pointer">Just exploring options</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfoStep;
