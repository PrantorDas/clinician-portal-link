
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
    <Card 
      className="w-full max-w-sm transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] cursor-pointer bg-white/95 backdrop-blur-sm border-medical-200 relative overflow-hidden group" 
      onClick={onClick}
    >
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Click to access {title.toLowerCase()}
          </div>
        </div>
      )}
      <CardHeader className="space-y-1 relative">
        <div className="w-14 h-14 rounded-full bg-medical-100 flex items-center justify-center mb-4 shadow-lg border-2 border-medical-200 transform -translate-y-1/2 mx-auto">
          <Icon className="w-7 h-7 text-medical-600" />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight text-gray-900 text-center">{title}</CardTitle>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {features && features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-600 group/item">
                <CheckCircle2 className="w-5 h-5 text-medical-500 transition-transform duration-300 group-hover/item:scale-110" />
                <span className="text-sm group-hover/item:text-medical-700 transition-colors duration-300">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <Button className="w-full bg-medical-600 hover:bg-medical-700 text-white shadow-md hover:shadow-lg transition-all duration-300 mt-4">
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
