// WhatsApp.js

import React from "react";
import whatsappLogo from "../../assets/whatsapplogo.png";

const WhatsApp = () => {
  const whatsappNumber = "+971566679896";

  return (
    <div className="fixed md:top-[15%] top-[17%] right-[2%] hover:scale-110 transition-all duration-200 ease-in">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-green-500 to-blue-500 p-0 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 transition duration-300 transform hover:scale-105"
      >
        <div className="w-[75px] h-[75px] rounded-full overflow-hidden border-2 border-white">
          <img
            src={whatsappLogo}
            alt="WhatsApp Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </a>
    </div>
  );
};

export default WhatsApp;
