export default function Badge({ text, color = "gray", size = "md" }) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-gray-100 text-gray-700"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base"
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-medium ${colors[color]} ${sizes[size]}`}
    >
      {text}
    </span>
  );
}
