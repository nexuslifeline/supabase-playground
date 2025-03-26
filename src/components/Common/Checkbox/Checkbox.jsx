const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  className = ""
}) => {
  return (
    <label
      className={`inline-flex items-center gap-2 cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-4 h-4 text-blue-600 transition duration-150 ease-in-out border-gray-300 rounded form-checkbox focus:ring-blue-500"
      />
      <span className="text-sm text-gray-800">{label}</span>
    </label>
  );
};

export default Checkbox;
