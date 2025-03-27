import { useState } from "react";

const PasswordInput = ({ error, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className={`w-full p-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
        }`}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword(prev => !prev)}
        className="absolute text-sm -translate-y-1/2 right-3 top-1/2"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordInput;
