
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Hospital, User, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type UserType = 'hospital' | 'donor' | 'patient';
type AuthMode = 'login' | 'signup';

const Auth = () => {
  const [userType, setUserType] = useState<UserType>('donor');
  const [mode, setMode] = useState<AuthMode>('login');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect if already logged in
  if (user) {
    navigate('/');
    return null;
  }

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    hospitalName: '',
    licenseNumber: '',
    phone: '',
    address: '',
    bloodType: '',
    dateOfBirth: '',
    emergencyContact: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return false;
    }

    if (mode === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Passwords do not match",
        });
        return false;
      }

      // Validate user type specific fields
      if (userType === 'hospital' && (!formData.hospitalName || !formData.licenseNumber)) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please fill in all hospital details",
        });
        return false;
      }

      if (userType === 'donor' && (!formData.firstName || !formData.lastName || !formData.bloodType)) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please fill in all donor details",
        });
        return false;
      }

      if (userType === 'patient' && (!formData.firstName || !formData.lastName || !formData.emergencyContact)) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please fill in all patient details",
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              user_type: userType,
              ...(userType === 'hospital' && {
                hospital_name: formData.hospitalName,
                license_number: formData.licenseNumber,
                address: formData.address,
                phone: formData.phone,
              }),
              ...(userType === 'donor' && {
                first_name: formData.firstName,
                last_name: formData.lastName,
                blood_type: formData.bloodType,
                date_of_birth: formData.dateOfBirth,
                phone: formData.phone,
              }),
              ...(userType === 'patient' && {
                first_name: formData.firstName,
                last_name: formData.lastName,
                emergency_contact: formData.emergencyContact,
                phone: formData.phone,
              }),
            },
          },
        });

        if (error) throw error;
        toast({
          title: "Success",
          description: "Please check your email to verify your account",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;
        navigate('/');
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {mode === 'login' ? 'Sign in to your account' : 'Create your account'}
          </CardTitle>
          <CardDescription>
            {mode === 'login' 
              ? 'Enter your credentials to access your account' 
              : 'Fill in your details to create your account'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={userType} onValueChange={(value) => setUserType(value as UserType)} className="mb-6">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="donor" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Donor
              </TabsTrigger>
              <TabsTrigger value="hospital" className="flex items-center gap-2">
                <Hospital className="h-4 w-4" />
                Hospital
              </TabsTrigger>
              <TabsTrigger value="patient" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Patient
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            {mode === 'signup' && (
              <>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />

                {userType === 'hospital' && (
                  <>
                    <Input
                      name="hospitalName"
                      placeholder="Hospital Name"
                      value={formData.hospitalName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="licenseNumber"
                      placeholder="License Number"
                      value={formData.licenseNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </>
                )}

                {(userType === 'donor' || userType === 'patient') && (
                  <>
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </>
                )}

                {userType === 'donor' && (
                  <>
                    <Input
                      name="bloodType"
                      placeholder="Blood Type"
                      value={formData.bloodType}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="dateOfBirth"
                      type="date"
                      placeholder="Date of Birth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </>
                )}

                {userType === 'patient' && (
                  <Input
                    name="emergencyContact"
                    placeholder="Emergency Contact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    required
                  />
                )}
              </>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Button
              variant="link"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            >
              {mode === 'login' 
                ? "Don't have an account? Sign up" 
                : 'Already have an account? Sign in'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
