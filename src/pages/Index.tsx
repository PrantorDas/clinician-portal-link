
import { User, Hospital, Lock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginCard from "@/components/LoginCard";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { userType } = useAuth();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to sign out. Please try again.",
      });
    } else {
      navigate("/auth");
    }
  };

  // Handlers for different login types
  const handleDoctorLogin = () => {
    navigate("/auth");
  };

  const handlePatientLogin = () => {
    navigate("/auth");
  };

  const handleHospitalLogin = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-fixed transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1631248055158-edec7a3c072b?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-medical-900/95 via-medical-900/85 to-medical-800/90 backdrop-blur-sm" />
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-medical-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-medical-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-medical-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Enhanced Logout Button */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          variant="outline"
          onClick={handleLogout}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-105"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-16 animate-fade-in-slow">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-medical-400/30 to-medical-600/30 rounded-full blur-3xl transform -translate-y-1/2 animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80" 
              alt="Blood Donation" 
              className="w-32 h-32 mx-auto rounded-full border-4 border-medical-100/50 shadow-2xl mb-6 relative z-10 object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-medical-100">
            Life Saver Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
            Join our network of blood donors and healthcare providers to 
            <span className="text-medical-200 font-medium"> save lives</span>
          </p>
        </div>

        {/* Enhanced Login Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto animate-fade-in px-4">
          <div className="flex justify-center transform hover:-translate-y-2 transition-transform duration-300">
            <LoginCard
              title="Hospital Dashboard"
              description="Monitor blood inventory, track donations, and manage requests"
              icon={Hospital}
              onClick={handleHospitalLogin}
              features={[
                "Real-time blood inventory tracking",
                "Donor and patient statistics",
                "Emergency request management"
              ]}
              imageSrc="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
            />
          </div>
          <div className="flex justify-center transform hover:-translate-y-2 transition-transform duration-300">
            <LoginCard
              title="Donor Portal"
              description="Make a difference by donating blood"
              icon={User}
              onClick={handleDoctorLogin}
              features={[
                "Schedule donations",
                "View donation history",
                "Track impact statistics"
              ]}
              imageSrc="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80"
            />
          </div>
          <div className="flex justify-center transform hover:-translate-y-2 transition-transform duration-300">
            <LoginCard
              title="Patient Access"
              description="Request blood and track your applications"
              icon={Lock}
              onClick={handlePatientLogin}
              features={[
                "Submit blood requests",
                "Real-time status updates",
                "Direct hospital communication"
              ]}
              imageSrc="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80"
            />
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto px-4">
          <div className="text-center text-white p-8 rounded-2xl bg-gradient-to-br from-medical-600/20 to-medical-500/10 backdrop-blur-md border border-medical-400/20 hover:bg-medical-600/30 transition-all duration-300 hover:scale-105 group">
            <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-medical-200">10,000+</div>
            <div className="text-gray-200 font-medium text-lg group-hover:text-white transition-colors">Active Donors</div>
          </div>
          <div className="text-center text-white p-8 rounded-2xl bg-gradient-to-br from-medical-600/20 to-medical-500/10 backdrop-blur-md border border-medical-400/20 hover:bg-medical-600/30 transition-all duration-300 hover:scale-105 group">
            <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-medical-200">500+</div>
            <div className="text-gray-200 font-medium text-lg group-hover:text-white transition-colors">Partner Hospitals</div>
          </div>
          <div className="text-center text-white p-8 rounded-2xl bg-gradient-to-br from-medical-600/20 to-medical-500/10 backdrop-blur-md border border-medical-400/20 hover:bg-medical-600/30 transition-all duration-300 hover:scale-105 group">
            <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-medical-200">15,000+</div>
            <div className="text-gray-200 font-medium text-lg group-hover:text-white transition-colors">Lives Saved</div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <footer className="mt-20 text-center text-gray-300 animate-fade-in backdrop-blur-sm p-6 rounded-xl bg-medical-900/10 border border-medical-400/10">
          <p className="text-sm font-medium">
            Protected by industry-leading security protocols | Available 24/7 for emergency requests
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
