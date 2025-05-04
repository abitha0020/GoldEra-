import Button from "../Components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Ownership() {
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Send OTP");
  const [aadhar, setAadhar] = useState("");
  const [huid, setHuid] = useState("");

  const navigate = useNavigate();
  const handleSendOTP = async () => {
    if (!isOtpVisible) {
      // Call backend API before showing OTP
      try {
        const response = await fetch(`http://localhost:3000/contract/is-huid-corresponding?aadhar=${aadhar}&huid=${huid}`);
        const data = await response.json();
        if (data.corresponding) {
          console.log("HUID is valid for given Aadhar. Sending OTP...");
          setIsOtpVisible(true);
          setButtonText("Proceed");
        } else {
          alert("HUID does not correspond to the provided Aadhar.");
        }
      } catch (error) {
        console.error("API call failed:", error);
        alert("Server error while verifying HUID.");
      }
    } else {
      handleSubmit();
    }
  };
  
  const handleSubmit = () => {
       navigate('/purity')
  }

  return (
    <div className="h-max">
      <div className="flex p-10 h-auto items-center">
      <div className="w-1/3 mx-auto h-auto bg-white p-8 border border-gray-200 rounded-xl shadow-lg w-[40%]">
        <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">Verify HUID</h2>
        <form>
            <div className="mb-4">
            <label htmlFor="aadhar" className="block text-gray- font-medium mb-2">
              Aadhaar Number
            </label>
            <input
              type="text"
              placeholder="Enter your Aadhar Number"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="huid" className="block text-gray- font-medium mb-2">
              HUID
            </label>
            <input
              type="text"
              placeholder="Enter the HUID"
              value={huid}
              onChange={(e) => setHuid(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
        {isOtpVisible&&
          (<div className="mb-4">
            <label htmlFor="huid" className="block text-gray- font-medium mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              placeholder="Enter your OTP"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
        )}
        </form>
        <div className="mt-0 mb-4">
        <Button title={buttonText} onClick={handleSendOTP} />
      </div>
      </div>
      </div>
    </div>
  );
}
