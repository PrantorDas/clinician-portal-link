
import { User, Hospital, Lock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginCard from "@/components/LoginCard";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext"; // Fixed import path

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
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-medical-900/90 via-medical-900/70 to-medical-900/90" />
      </div>

      {/* Logout Button */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          variant="outline"
          onClick={handleLogout}
          className="bg-white/90 hover:bg-white"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-slow">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-medical-500/20 rounded-full blur-3xl transform -translate-y-1/2" />
            <img 
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80" 
              alt="Blood Donation" 
              className="w-28 h-28 mx-auto rounded-full border-4 border-medical-100 shadow-2xl mb-6 relative z-10 object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Life Saver Connect
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Join our network of blood donors and healthcare providers to save lives
          </p>
        </div>

        {/* Login Cards Grid */}
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
              imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
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
              imageSrc="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?auto=format&fit=crop&q=80"
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
              imageSrc="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto px-4">
          <div className="text-center text-white p-6 rounded-xl bg-medical-600/20 backdrop-blur-md border border-medical-400/20 hover:bg-medical-600/30 transition-colors duration-300">
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <div className="text-gray-200 font-medium">Active Donors</div>
          </div>
          <div className="text-center text-white p-6 rounded-xl bg-medical-600/20 backdrop-blur-md border border-medical-400/20 hover:bg-medical-600/30 transition-colors duration-300">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-gray-200 font-medium">Partner Hospitals</div>
          </div>
          <div className="text-center text-white p-6 rounded-xl bg-medical-600/20 backdrop-blur-md border border-medical-400/20 hover:bg-medical-600/30 transition-colors duration-300">
            <div className="text-4xl font-bold mb-2">15,000+</div>
            <div className="text-gray-200 font-medium">Lives Saved</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-300 animate-fade-in">
          <p className="text-sm font-medium">
            Protected by industry-leading security protocols | Available 24/7 for emergency requests
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
