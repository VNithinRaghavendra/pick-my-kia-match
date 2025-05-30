
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, Clock } from "lucide-react";

interface ContactStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

const ContactStep = ({ formData, setFormData }: ContactStepProps) => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center space-x-3 text-2xl">
          <div className="bg-green-100 p-2 rounded-lg">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <span>Contact & Follow-Up</span>
        </CardTitle>
        <p className="text-gray-600 mt-2">How can we reach you with your personalized recommendations?</p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-base font-semibold">Your name</Label>
            <Input 
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter your full name"
              className="h-12"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="mobile" className="text-base font-semibold flex items-center space-x-2">
              <Phone className="h-4 w-4 text-green-600" />
              <span>Mobile number</span>
            </Label>
            <Input 
              id="mobile"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              placeholder="Enter your mobile number"
              className="h-12"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-base font-semibold flex items-center space-x-2">
              <Mail className="h-4 w-4 text-green-600" />
              <span>Email</span>
            </Label>
            <Input 
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Enter your email address"
              className="h-12"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="contactTime" className="text-base font-semibold flex items-center space-x-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span>Preferred contact time</span>
            </Label>
            <Select value={formData.contactTime} onValueChange={(value) => setFormData({...formData, contactTime: value})}>
              <SelectTrigger className="h-12">
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

        <div className="space-y-4">
          <Label className="text-base font-semibold flex items-center space-x-2">
            <MessageSquare className="h-4 w-4 text-green-600" />
            <span>Would you like a quote on WhatsApp?</span>
          </Label>
          <RadioGroup 
            value={formData.whatsappQuote} 
            onValueChange={(value) => setFormData({...formData, whatsappQuote: value})}
            className="grid md:grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-green-50 transition-colors">
              <RadioGroupItem value="yes" id="whatsapp-yes" />
              <Label htmlFor="whatsapp-yes" className="cursor-pointer">Yes, send quote on WhatsApp</Label>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-green-50 transition-colors">
              <RadioGroupItem value="no" id="whatsapp-no" />
              <Label htmlFor="whatsapp-no" className="cursor-pointer">No, prefer email/call</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactStep;
