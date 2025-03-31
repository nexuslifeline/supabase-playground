import cn from "classnames";

// Color palette for background
const colors = [
  "bg-red-500 text-white",
  "bg-green-500 text-white",
  "bg-blue-500 text-white",
  "bg-yellow-400 text-white",
  "bg-orange-500 text-white",
  "bg-red-600 text-white",
  "bg-green-600 text-white",
  "bg-yellow-500 text-white",
  "bg-pink-500 text-white",
  "bg-indigo-500 text-white",
  "bg-rose-500 text-white",
  "bg-amber-500 text-white",
  "bg-lime-500 text-white",
  "bg-cyan-800 text-white",
  "bg-teal-600 text-white",
  "bg-purple-600 text-white",
  "bg-blue-400 text-white",
  "bg-purple-500 text-white",
  "bg-gray-800 text-white"
];

// Function to get the color index based on initials
const getColorIndex = (initials = "") => {
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = (hash << 5) - hash + initials.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash) % colors.length;
};

// Avatar component as an arrow function
const Avatar = ({
  src = null,
  square = false,
  initials,
  alt = "",
  className,
  ...props
}) => {
  const colorIndex = initials ? getColorIndex(initials) : -1; // Use -1 if no initials
  const backgroundColor = initials
    ? colors[colorIndex]
    : "bg-gray-700 animate-pulse"; // Default gray with pulse

  return (
    <span
      data-slot="avatar"
      {...props}
      className={cn(
        className,
        backgroundColor,
        // Basic layout
        "inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1",
        "outline outline-1 -outline-offset-1 outline-white/[--ring-opacity]",
        // Add the correct border radius
        square
          ? "rounded-[--avatar-radius] *:rounded-[--avatar-radius]"
          : "rounded-full *:rounded-full"
      )}
    >
      {initials && (
        <svg
          className="size-full select-none fill-current p-[5%] text-[48px] font-medium uppercase"
          viewBox="0 0 100 100"
          aria-hidden={alt ? undefined : "true"}
        >
          {alt && <title>{alt}</title>}
          <text
            x="50%"
            y="50%"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            textAnchor="middle"
            dy=".125em"
          >
            {initials}
          </text>
        </svg>
      )}
      {src && <img className="size-full" src={src} alt={alt} />}
    </span>
  );
};

export default Avatar;
