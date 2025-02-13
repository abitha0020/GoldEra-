import React from 'react';
import cardImage1 from '../assets/cardImage1.png';
import cardImage2 from '../assets/cardImage2.png';
import cardImage3 from '../assets/cardImage3.png';
import logo from '../assets/logo.png';
import Navbar from '../Components/Navbar';

const HomePage: React.FC = () => {
  const cards = [
    {
      id: 1,
      link: "/loginB",
      description: <b>BANK</b>,
      image: cardImage1
    },
    {
      id: 2,
      link: "/loginJ",
      description: <b>JEWELLERY</b>,
      image: cardImage2
    },
    {
      id: 3,
      link: "/CitizenLogin",
      description: <b>CITIZEN</b>,
      image: cardImage3
    },
  ];

  return (
    <div style={{ backgroundColor: '#FFF7D4' }} className="min-h-screen">
      <Navbar />

      {/* Header with logo and title */}
      <div className="flex flex-col items-center justify-center p-11 text-center">
        <img src={logo} alt="Logo" className="w-32 mb-4" />
        <h1 className="text-5xl font-bold text-black">GOLDERA</h1>
        <h2 className="text-lg font-medium text-black mt-2">
          GATEWAY TO AN ERA OF SECURE GOLD TRANSACTIONS
        </h2>
      </div>

      {/* Card Section */}
      <div className="flex items-center justify-center p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <a href={card.link} key={card.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col justify-between max-w-xs md:max-w-md">
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="bg-gray-200 py-16 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">About Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto px-4">
        <b>The lack of a centralized management system for gold, combine with increasing thefts and the cumbersome process of obtaining gold loans, highlights a pressing need for improved transparency and efficiency in gold transactions. There is a growing demand for a standardized solution that can enhance security and streamline the transfer process for gold assets. 

We are proposing a new system for gold exchange in India. The proposed system is an end-to-end digital process anchored on Aadhar. It's a linkage between Aadhar IDs and Hallmark Unique Identification numbers(HUID). 
The concept involves jewellery owners associating their HUIDs with Aadhar IDs while selling their product, leveraging blockchain technology to ensure the security and immutability of ownership records. This Aadhar-HUID linkage streamlines ownership verification and facilitates transparent and secure transferability of gold assets. When a bank or loan provider needs to verify the ownership and purity of gold item, they access the data associated with the corresponding HUID. This information, allows for a precise assessment of purity. 
With this proposed new system we intend to reduce gold smuggling as aadhar id linkage is needed for further transfer of gold and provide greater transparency , purity assurance , faster gold loan and faster exchange of golds from jewellery. 
With this project we aim to build a trustworthy and transparent environment or platform for handling one of the most precious materialistic resource known to mankind - The Gold.</b>
        </p>

        
      </section>
    </div>
  );
};

export default HomePage;
