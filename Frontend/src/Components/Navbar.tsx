import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="w-full h-16 flex items-center justify-between px-4"
      style={{ backgroundColor: '#C07F00' }}
    >
      <h1 className="text-4xl font-bold text-white">GOLDERA</h1>
      <ul className="flex space-x-8 text-white text-lg">
        <li className="hover:text-gray-700 cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-gray-700 cursor-pointer" onClick={() => scrollToSection("about")}>
          About Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
