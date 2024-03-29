import React from "react";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl p-4 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 text-[20px] rounded-lg text-gray-800 bg-white hover:bg-gray-200 hover:text-black"
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
