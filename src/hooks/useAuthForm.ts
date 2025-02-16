
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import type { FormData } from "@/components/auth/AuthForm";

type UserType = 'hospital' | 'donor' | 'patient';
type AuthMode = 'login' | 'signup';

export const useAuthForm = () => {
  const [userType, setUserType] = useState<UserType>('donor');
  const [mode, setMode] = useState<AuthMode>('login');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
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

  return {
    userType,
    setUserType,
    mode,
    setMode,
    loading,
    formData,
    handleInputChange,
    handleSubmit,
  };
};
