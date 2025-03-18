import { FaTimes } from "react-icons/fa";

export default function Modal({
  isOpen,
  title = "Create Memory",
  description = "Share cherished memories with loved ones and leave a lasting legacy for the future.",
  onClose,
  size = "md",
  children
}) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "w-1/4", // Small
    md: "max-w-[520px] w-full", // Medium (Default)
    lg: "w-3/4", // Large
    xl: "w-11/12" // Extra Large
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={`bg-white rounded-2xl shadow-lg transform transition-all p-8 space-y-4
                    ${sizeClasses[size]} max-w-full`}
      >
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-black">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>

        <button className="absolute text-black top-4 right-4" onClick={onClose}>
          <FaTimes className="w-5 h-5" />
        </button>

        <div>{children}</div>
      </div>
    </div>
  );
}
