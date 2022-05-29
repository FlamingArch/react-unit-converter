import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex place-items-center gap-1 bg-white px-4 font-medium text-blue-700 py-2 rounded-md hover:shadow-xl hover:bg-blue-600 hover:text-white"
    >
      {children}
    </button>
  );
};

export default Button;
