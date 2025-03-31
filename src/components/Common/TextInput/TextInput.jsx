const TextInput = ({ error, ...props }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        className={`w-full p-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextInput;
