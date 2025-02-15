
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface LoginCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const LoginCard = ({ title, description, icon: Icon, onClick }: LoginCardProps) => {
  return (
    <Card className="w-full max-w-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer bg-white/80 backdrop-blur-sm border-medical-200" onClick={onClick}>
      <CardHeader className="space-y-1">
        <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-medical-600" />
        </div>
        <CardTitle className="text-2xl font-semibold tracking-tight text-gray-900">{title}</CardTitle>
        <CardDescription className="text-base text-gray-500">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full bg-medical-600 hover:bg-medical-700 text-white">
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
