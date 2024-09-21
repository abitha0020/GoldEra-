import React, { useState } from 'react';

const NewUserRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    aadhaar: '',
    huids: ['']  // Array to store multiple HUIDs
  });

  // Handle changes in Name and Aadhaar fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle changes for dynamic HUID fields
  const handleHuidChange = (index: number, value: string) => {
    const updatedHuids = formData.huids.map((huid, idx) =>
      idx === index ? value : huid
    );
    setFormData({ ...formData, huids: updatedHuids });
  };

  // Add new HUID field
  const addHuidField = () => {
    setFormData({ ...formData, huids: [...formData.huids, ''] });
  };

  // Remove HUID field
  const removeHuidField = (index: number) => {
    const updatedHuids = formData.huids.filter((_, idx) => idx !== index);
    setFormData({ ...formData, huids: updatedHuids });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Handle form submission logic here (API calls, sending OTP, etc.)
  };

  return (
    <div style={{ backgroundColor: '#FFF7D4' }} className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">New User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name" 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="aadhaar" className="block text-gray-700 font-semibold">Aadhaar No:</label>
            <input 
              type="text" 
              id="aadhaar" 
              name="aadhaar" 
              value={formData.aadhaar} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter Aadhaar number" 
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">HUID(s):</label>
            {formData.huids.map((huid, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input 
                  type="text" 
                  name={`huid-${index}`} 
                  value={huid} 
                  onChange={(e) => handleHuidChange(index, e.target.value)} 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter HUID" 
                />
                <button 
                  type="button" 
                  onClick={addHuidField} 
                  className="text-yellow-500 font-bold text-xl"
                >
                  +
                </button>
                {index > 0 && (
                  <button 
                    type="button" 
                    onClick={() => removeHuidField(index)} 
                    className="text-red-500 font-bold text-xl"
                  >
                    −
                  </button>
                )}
              </div>
            ))}
          </div>

          <button 
            type="submit" 
            className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUserRegistration;
