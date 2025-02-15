
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
    <div className="min-h-screen bg-gradient-to-b from-medical-50 to-sage-100 flex flex-col items-center justify-center p-4 md:p-8">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fade-in-slow">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Healthcare Portal
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Secure access for healthcare professionals and patients
        </p>
      </div>

      {/* Login Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto animate-fade-in">
        <div className="flex justify-center">
          <LoginCard
            title="Doctor Login"
            description="Access your patient records and schedules"
            icon={User}
            onClick={handleDoctorLogin}
          />
        </div>
        <div className="flex justify-center">
          <LoginCard
            title="Patient Login"
            description="View your medical history and appointments"
            icon={Lock}
            onClick={handlePatientLogin}
          />
        </div>
        <div className="flex justify-center">
          <LoginCard
            title="Hospital Login"
            description="Manage your hospital's resources and staff"
            icon={Hospital}
            onClick={handleHospitalLogin}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 animate-fade-in">
        <p className="text-sm">
          Protected by industry-leading security protocols
        </p>
      </footer>
    </div>
  );
};

export default Index;
