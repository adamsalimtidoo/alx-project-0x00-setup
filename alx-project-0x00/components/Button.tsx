import React from "react";

const Button = ({ title, style }) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;
