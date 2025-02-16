
import { useState } from "react";
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
    <form onSubmit={onSubmit} className="space-y-4">
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
        <SignupFields
          userType={userType}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Sign Up'}
      </Button>

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
    </form>
  );
};
