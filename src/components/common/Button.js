import React from 'react';

const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "px-6 py-2 rounded-lg font-semibold transition duration-300";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600",
    secondary: "bg-white text-primary border border-primary hover:bg-gray-50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-primary"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;