import cn from "classnames";

const TextArea = ({ className, ...props }) => {
  return (
    <textarea
      className={cn(
        "w-full min-h-24 p-2 text-gray-700 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  );
};

export default TextArea;
