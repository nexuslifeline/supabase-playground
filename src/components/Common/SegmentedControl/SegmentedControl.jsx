import cn from "classnames";

const SegmentedControl = ({ options = [], selectedIndex = 0, onChange }) => {
  return (
    <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg w-max">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={cn(
            "px-3 h-[32px] flex items-center gap-1 rounded-lg focus:outline-none transition-all text-[14px] font-jakarta",
            selectedIndex === index
              ? "bg-white text-blue-600 shadow"
              : "bg-transparent text-gray-500 hover:text-blue-500"
          )}
        >
          {option.icon && <option.icon className="w-4 h-4" />}
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
