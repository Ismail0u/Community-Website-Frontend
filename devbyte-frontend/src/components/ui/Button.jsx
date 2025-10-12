import React from "react";
import clsx from "clsx";

const Button = ({
  children, // content inside the button
  onClick, // callback function when the button is clicked
  type = "button", // default button type, can be "submit"
  className = "", // lets you pass additional classes
  disabled = false, // button is enabled by default
}) => {
  // Base styles applied to all buttons
  const baseStyles = "px-5 py-2 rounded-sm focus:outline-none transition-all ";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, className)}
    >
      {children}
    </button>
  );
};

export default Button;
