import React, { useState } from 'react';

import Logo from "@/assets/melosynthia-ai-high-resolution-logo-color-on-transparent-background.png"
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-opacity-60 backdrop-blur-sm bg-gray-800 fixed top-0 left-0 right-0 z-50 w-full flex py-4 justify-between items-center navbar">
        <img src={Logo} alt="" className=""width={190} style={{ marginLeft: '2rem' }}/>
     
        <div className="container mx-auto  md:flex md:items-center md:justify-between" style={{marginRight:'1rem'}}>
       
            <div className="flex justify-end items-center ">
          <button
            className="md:hidden rounded-lg p-2 text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 5h16v2H4zM4 11h16v2H4zM4 17h16v2H4z" />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex flex-col md:flex-row md:items-end md:space-x-4 ${
            isOpen ? 'flex' : 'hidden'
          }`}>

          {/* Buttons of Navigation Bar*/}

          <a href="#"className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            Create Music
          </a>

          <a href="#"className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700">
           NFT Marketplace
          </a>

          <a href="#"className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            About Us
          </a>

          <a href="#"className="block text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            Future
          </a>

         <button className="bg-cyan-400  text-black font-medium py-2 px-4  my-1 rounded-md">
         Get started
</button>
         <button className="bg-cyan-400  text-black font-medium py-2 px-4  my-1 rounded-md">
         Register
</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
          