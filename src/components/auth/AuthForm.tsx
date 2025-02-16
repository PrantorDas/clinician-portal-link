
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Hospital, User, Users } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignupFields } from "./SignupFields";

type UserType = 'hospital' | 'donor' | 'patient';
type AuthMode = 'login' | 'signup';

export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  hospitalName: string;
  licenseNumber: string;
  phone: string;
  address: string;
  bloodType: string;
  dateOfBirth: string;
  emergencyContact: string;
}

interface AuthFormProps {
  onSubmit: (e: React.FormEvent) => Promise<void>;
  loading: boolean;
  mode: AuthMode;
  setMode: (mode: AuthMode) => void;
  userType: UserType;
  setUserType: (type: UserType) => void;
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthForm = ({
  onSubmit,
  loading,
  mode,
  setMode,
  userType,
  setUserType,
  formData,
  handleInputChange,
}: AuthFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Tabs 
        value={userType} 
        onValueChange={(value) => setUserType(value as UserType)} 
        className="mb-8"
      >
        <TabsList className="grid grid-cols-3 w-full bg-medical-50/50">
          <TabsTrigger 
            value="donor" 
            className="flex items-center gap-2 data-[state=active]:bg-white"
          >
            <User className="h-4 w-4" />
            Donor
          </TabsTrigger>
          <TabsTrigger 
            value="hospital" 
            className="flex items-center gap-2 data-[state=active]:bg-white"
          >
            <Hospital className="h-4 w-4" />
            Hospital
          </TabsTrigger>
          <TabsTrigger 
            value="patient" 
            className="flex items-center gap-2 data-[state=active]:bg-white"
          >
            <Users className="h-4 w-4" />
            Patient
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="bg-white/50 backdrop-blur-sm border-medical-200 focus:border-medical-500"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="bg-white/50 backdrop-blur-sm border-medical-200 focus:border-medical-500"
        />

        {mode === 'signup' && (
          <SignupFields
            userType={userType}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-medical-600 to-medical-500 hover:from-medical-700 hover:to-medical-600 text-white font-medium py-2.5"
          disabled={loading}
        >
          {loading ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Sign Up'}
        </Button>

        <div className="text-center">
          <Button
            variant="link"
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-medical-600 hover:text-medical-700"
          >
            {mode === 'login' 
              ? "Don't have an account? Sign up" 
              : 'Already have an account? Sign in'}
          </Button>
        </div>
      </div>
    </form>
  );
};
