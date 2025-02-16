
import { Input } from "@/components/ui/input";
import type { FormData } from "./AuthForm";

interface SignupFieldsProps {
  userType: 'hospital' | 'donor' | 'patient';
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignupFields = ({ userType, formData, handleInputChange }: SignupFieldsProps) => {
  return (
    <>
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        required
      />

      <Input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleInputChange}
      />

      {userType === 'hospital' && (
        <>
          <Input
            name="hospitalName"
            placeholder="Hospital Name"
            value={formData.hospitalName}
            onChange={handleInputChange}
            required
          />
          <Input
            name="licenseNumber"
            placeholder="License Number"
            value={formData.licenseNumber}
            onChange={handleInputChange}
            required
          />
          <Input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </>
      )}

      {(userType === 'donor' || userType === 'patient') && (
        <>
          <Input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </>
      )}

      {userType === 'donor' && (
        <>
          <Input
            name="bloodType"
            placeholder="Blood Type"
            value={formData.bloodType}
            onChange={handleInputChange}
            required
          />
          <Input
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </>
      )}

      {userType === 'patient' && (
        <Input
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={formData.emergencyContact}
          onChange={handleInputChange}
          required
        />
      )}
    </>
  );
};
