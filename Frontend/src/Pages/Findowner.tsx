import { useState } from "react";
import axios from "axios";

export default function FindOwner() {
  const [huid, setHUID] = useState("");
  const [aadharResult, setAadharResult] = useState<string | null>(null);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAadhar = async () => {
    try {
      // Make an API request to fetch HUIDs based on the Aadhar number
      const response = await axios.get(`http://localhost:3000/contract/get-aadhar/${huid}`);
      
      const aadhar = response.data.aadhar;
      setAadharResult(`Aadhar for HUID ${huid}: ${aadhar}`);
      setIsResultVisible(true);
      setError(null);
    } catch (err) {
      console.error('Error fetching Aadhar:', err);
      setError("Failed to fetch Aadhar. Please try again.");
      console.error('Error fetching Aadhar:', error);
      setAadharResult(null);
      setIsResultVisible(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-yellow-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="font-bold text-lg mb-4">Fetch Aadhar</h2>
        <label htmlFor="huidInput" className="block mb-2">Enter HUID:</label>
        <input
          type="text"
          id="huidInput"
          value={huid}
          onChange={(e) => setHUID(e.target.value)}
          required
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <button
          onClick={getAadhar}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 w-full"
        >
          Get Aadhar
        </button>
        {isResultVisible && (
          <div className="mt-4 p-2 bg-gray-100 rounded">
            <strong>Result:</strong>
            <p>{aadharResult}</p>
          </div>
        )}
        
      </div>
    </div>
  );
}