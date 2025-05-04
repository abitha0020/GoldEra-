import { useState } from "react";
import Button from "../Components/button";
import { useNavigate } from 'react-router-dom';
 // Assuming you have a Button component

export default function Citizen() {
  const [name, setName] = useState("");
  const [aadhaarId, setAadhaarId] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = () => {
    console.log(`Name: ${name}, Aadhaar ID: ${aadhaarId}`);
    setIsOtpSent(true);
    alert(`OTP sent to Aadhaar ID: ${aadhaarId}`);
  };

  const handleOtpVerification = () => {
    console.log(`Verifying OTP: ${otp} for Aadhaar ID: ${aadhaarId}`);
    alert("OTP verified successfully!");
    navigate('/CitizenHomePage')
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="font-medium text-5xl mb-8 tracking-wider">Citizen Portal</h2>
      <h3 className="mb-8 text-yellow-500 text-2xl">Log in to your user account</h3>
      <div className="w-full max-w-md bg-white shadow-lg p-8 rounded-lg">
        <div className="mb-4">
          <label className="block mb-2 text-lg">Aadhaar ID:</label>
          <input
            type="text"
            value={aadhaarId}
            onChange={(e) => setAadhaarId(e.target.value)}
            className="border rounded-lg w-full p-3"
            placeholder="Enter your Aadhaar ID"
          />
        </div>
        {isOtpSent && (
          <div className="mb-4">
            <label className="block mb-2 text-lg">Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border rounded-lg w-full p-3"
              placeholder="Enter the OTP"
            />
          </div>
        )}
        <div className="mt-6">
          {!isOtpSent ? (
            <Button title="Send OTP" onClick={handleSubmit} />
          ) : (
            <Button title="Verify OTP" onClick={handleOtpVerification} />
          )}
        </div>
      </div>
    </div>
  );
}
