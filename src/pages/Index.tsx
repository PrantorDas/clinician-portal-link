
import { User, Hospital, Lock } from "lucide-react";
import LoginCard from "@/components/LoginCard";

const Index = () => {
  // Handlers for different login types
  const handleDoctorLogin = () => {
    console.log("Doctor login clicked");
  };

  const handlePatientLogin = () => {
    console.log("Patient login clicked");
  };

  const handleHospitalLogin = () => {
    console.log("Hospital login clicked");
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1615461066159-fea0960944d0?q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-medical-900/80 via-medical-900/60 to-medical-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in-slow">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1615461066168-e138b2bd8a87?w=300" 
              alt="Blood Donation" 
              className="w-24 h-24 mx-auto rounded-full border-4 border-medical-100 shadow-xl mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Life Saver Connect
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Join our network of blood donors and healthcare providers to save lives
          </p>
        </div>

        {/* Login Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto animate-fade-in">
          <div className="flex justify-center">
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
              imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400"
            />
          </div>
          <div className="flex justify-center">
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
              imageSrc="https://images.unsplash.com/photo-1615461066339-21152fecf9a9?w=400"
            />
          </div>
          <div className="flex justify-center">
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
              imageSrc="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto px-4">
          <div className="text-center text-white p-4 rounded-lg bg-medical-600/20 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-gray-200">Active Donors</div>
          </div>
          <div className="text-center text-white p-4 rounded-lg bg-medical-600/20 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-gray-200">Partner Hospitals</div>
          </div>
          <div className="text-center text-white p-4 rounded-lg bg-medical-600/20 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-2">15,000+</div>
            <div className="text-gray-200">Lives Saved</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-300 animate-fade-in">
          <p className="text-sm">
            Protected by industry-leading security protocols | Available 24/7 for emergency requests
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
