import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface JewelleryInfo {
  id: string;
  name: string;
  district: string;
}

export default function BISHome() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const jewelleryData: { [key: string]: JewelleryInfo[] } = {
    Kerala: [
      { id: "4656459867", name: "ABC JEWELLERY", district: "THIRUVANANTHAPURAM" },
      { id: "9856743234", name: "XYZ JEWELLERY", district: "ERNAKULAM" },
      { id: "3567887655", name: "JOHN JEWELLERY", district: "PATHANAMTHITTA" },
      { id: "9988776655", name: "BEN JEWELLERY", district: "KOLLAM" },
      { id: "2765478967", name: "JACK JEWELLERY", district: "MALAPPURAM" },
      { id: "8897676545", name: "KEVIN JEWELLERY", district: "KOZHIKODE" },
      { id: "4567384756", name: "DANY JEWELLERY", district: "KOTTAYAM" },
      { id: "3289674586", name: "DAVID JEWELLERY", district: "KANNUR" },
    ],
    
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const showState = (stateName: string) => {
    setSelectedState(stateName);
    setIsDropdownOpen(false); 
  };

  const renderJewelleryTable = () => {
    if (!selectedState || !jewelleryData[selectedState]) {
      return <p>No information available for {selectedState}.</p>;
    }

    const stateJewellery = jewelleryData[selectedState];

    return (
      <table className="table-auto w-full mt-5 border-collapse border border-gray-300">
        <thead className="bg-yellow-400">
          <tr>
            <th className="border border-gray-300 px-4 py-2">JEWELLERY ID</th>
            <th className="border border-gray-300 px-4 py-2">JEWELLERY NAME</th>
            <th className="border border-gray-300 px-4 py-2">DISTRICT</th>
            <th className="border border-gray-300 px-4 py-2">INFO</th>
          </tr>
        </thead>
        <tbody>
          {stateJewellery.map((jewellery) => (
            <tr key={jewellery.id} className="bg-white hover:bg-yellow-100">
              <td className="border border-gray-300 px-4 py-2">{jewellery.id}</td>
              <td className="border border-gray-300 px-4 py-2">{jewellery.name}</td>
              <td className="border border-gray-300 px-4 py-2">{jewellery.district}</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="./view.html" className="text-blue-500 underline">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container mx-auto p-8 bg-yellow-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-yellow-700 mb-8">BUREAU OF INDIAN STANDARDS</h1>

      <div className="flex justify-center items-center mb-10 space-x-4">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-700"
          >
            SELECT STATE
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 w-full bg-white rounded-md shadow-lg z-10">
              {states.map((stateName) => (
                <a
                  key={stateName}
                  href="#"
                  onClick={() => showState(stateName)}
                  className="block px-4 py-2 text-yellow-700 hover:bg-yellow-100"
                >
                  {stateName}
                </a>
              ))}
            </div>
          )}
        </div>

        <a >
          <button
            type="submit"
            className="bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-700"
            onClick={()=>{navigate('/FindOwner')}}
          >
            FIND OWNER
          </button>
        </a>

        <a >
          <button
            type="submit"
            className="bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-700"
            onClick={()=>{navigate('/HUIDlisting')}}
          >
            HUID LISTING
          </button>
        </a>
      </div>

      {selectedState && (
        <div>
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">Jewellery Information in {selectedState}</h2>
          {renderJewelleryTable()}
        </div>
      )}
    </div>
  );
}
