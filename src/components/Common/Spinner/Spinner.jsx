import React from "react";

import cn from "classnames";

const Spinner = ({ size = "extra-small", className }) => {
  const sizes = {
    "extra-small": "w-4 h-4 border",
    small: "w-6 h-6 border-2",
    medium: "w-12 h-12 border-4",
    large: "w-20 h-20 border-8"
  };

  const spinnerSize = sizes[size] || sizes.small; // Fallback to 'small' if size is invalid

  return (
    <div className={cn("flex justify-center items-center", className)}>
      <div
        className={`${spinnerSize} border-t-transparent border-blue-500 rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Spinner;
