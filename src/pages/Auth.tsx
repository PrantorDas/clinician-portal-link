
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AuthForm } from "@/components/auth/AuthForm";
import { useAuthForm } from "@/hooks/useAuthForm";

const Auth = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    userType,
    setUserType,
    mode,
    setMode,
    loading,
    formData,
    handleInputChange,
    handleSubmit,
  } = useAuthForm();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (user) {
    return null;
  }

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
          <AuthForm
            onSubmit={handleSubmit}
            loading={loading}
            mode={mode}
            setMode={setMode}
            userType={userType}
            setUserType={setUserType}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
