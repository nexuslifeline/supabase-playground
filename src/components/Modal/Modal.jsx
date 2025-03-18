export default function Modal({ isOpen, onClose, size = "md", children }) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "w-1/4", // Small
    md: "w-1/2", // Medium (Default)
    lg: "w-3/4", // Large
    xl: "w-11/12" // Extra Large
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={`bg-white p-6 rounded-lg shadow-lg transform transition-all 
                    ${sizeClasses[size]} max-w-full`}
      >
        <button
          className="absolute text-gray-500 top-2 right-2"
          onClick={onClose}
        >
          ✖
        </button>
        {children} {/* Dynamic Content Here */}
      </div>
    </div>
  );
}
