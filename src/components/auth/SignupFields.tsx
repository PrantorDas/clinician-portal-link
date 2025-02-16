
import { Input } from "@/components/ui/input";
import type { FormData } from "./AuthForm";

interface SignupFieldsProps {
  userType: 'hospital' | 'donor' | 'patient';
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignupFields = ({ userType, formData, handleInputChange }: SignupFieldsProps) => {
  const inputClassName = "bg-white/50 backdrop-blur-sm border-medical-200 focus:border-medical-500";
  
  return (
    <div className="space-y-4">
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        required
        className={inputClassName}
      />

      <Input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleInputChange}
        className={inputClassName}
      />

      {userType === 'hospital' && (
        <div className="space-y-4">
          <Input
            name="hospitalName"
            placeholder="Hospital Name"
            value={formData.hospitalName}
            onChange={handleInputChange}
            required
            className={inputClassName}
          />
          <Input
            name="licenseNumber"
            placeholder="License Number"
            value={formData.licenseNumber}
            onChange={handleInputChange}
            required
            className={inputClassName}
          />
          <Input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className={inputClassName}
          />
        </div>
      )}

      {(userType === 'donor' || userType === 'patient') && (
        <div className="space-y-4">
          <Input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className={inputClassName}
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className={inputClassName}
          />
        </div>
      )}

      {userType === 'donor' && (
        <div className="space-y-4">
          <Input
            name="bloodType"
            placeholder="Blood Type"
            value={formData.bloodType}
            onChange={handleInputChange}
            required
            className={inputClassName}
          />
          <Input
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
            className={inputClassName}
          />
        </div>
      )}

      {userType === 'patient' && (
        <Input
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={formData.emergencyContact}
          onChange={handleInputChange}
          required
          className={inputClassName}
        />
      )}
    </div>
  );
};
