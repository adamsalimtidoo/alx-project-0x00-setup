import React from "react";

type ButtonProps = {
  title: string; 
  styles: string;
};

const Button = ({ title, styles }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
