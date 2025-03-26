import { useRef } from "react";

import { FaTimes } from "react-icons/fa";

export default function Modal({
  isOpen,
  title = "",
  description = "",
  onClose,
  size = "md",
  children,
  hasClose = true
}) {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "w-1/4",
    md: "max-w-[500px] w-full",
    lg: "w-3/4",
    xl: "w-11/12"
  };

  const handleBackdropClick = e => {
    // If user clicks directly on the backdrop (not inside modal)
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`relative bg-gray-50 rounded-2xl shadow-lg transform transition-all p-3 ${sizeClasses[size]}`}
      >
        {hasClose && (
          <button
            className="absolute text-black top-4 right-4"
            onClick={onClose}
          >
            <FaTimes className="w-5 h-5" />
          </button>
        )}

        {(title || description) && (
          <div className="flex flex-col gap-2 mb-4">
            {title && (
              <h2 className="text-xl font-semibold text-black">{title}</h2>
            )}
            {description && <p className="text-gray-500">{description}</p>}
          </div>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
}
