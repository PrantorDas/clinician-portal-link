
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1631248055158-edec7a3c072b?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-medical-900/95 via-medical-900/85 to-medical-800/90 backdrop-blur-sm" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-medical-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-medical-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-medical-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-4 py-8">
        <Card className="backdrop-blur-md bg-white/95 shadow-2xl border border-white/20">
          <CardHeader className="text-center space-y-4 pb-2">
            <div className="mx-auto w-20 h-20 rounded-full bg-medical-100 flex items-center justify-center mb-2">
              <img 
                src="/placeholder.svg" 
                alt="Logo" 
                className="w-12 h-12"
              />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-medical-700 to-medical-500 bg-clip-text text-transparent">
              {mode === 'login' ? 'Welcome Back' : 'Join Our Community'}
            </CardTitle>
            <CardDescription className="text-base text-medical-600">
              {mode === 'login' 
                ? 'Enter your credentials to access your account' 
                : 'Fill in your details to create your account'}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
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
    </div>
  );
};

export default Auth;
