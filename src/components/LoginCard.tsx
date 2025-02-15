
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon, CheckCircle2 } from "lucide-react";

interface LoginCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  features?: string[];
  imageSrc?: string;
}

const LoginCard = ({ 
  title, 
  description, 
  icon: Icon, 
  onClick,
  features,
  imageSrc 
}: LoginCardProps) => {
  return (
    <Card className="w-full max-w-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer bg-white/95 backdrop-blur-sm border-medical-200" onClick={onClick}>
      {imageSrc && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      <CardHeader className="space-y-1">
        <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center mb-4 shadow-md">
          <Icon className="w-6 h-6 text-medical-600" />
        </div>
        <CardTitle className="text-2xl font-semibold tracking-tight text-gray-900">{title}</CardTitle>
        <CardDescription className="text-base text-gray-500">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-medical-500" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <Button className="w-full bg-medical-600 hover:bg-medical-700 text-white">
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
