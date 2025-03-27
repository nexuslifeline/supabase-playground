import cn from "classnames";
import Spinner from "@components/Common/Spinner/Spinner";

const Button = ({
  disabled,
  isBusy = false,
  variant = "primary", // 'primary' or 'secondary'
  block = false, // boolean: if true, makes button full width
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex justify-center items-center gap-2 px-5 py-2 mt-4 rounded-lg transition duration-200";

  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-900",
    secondary:
      "border border-gray-300 text-black hover:bg-black hover:border-black hover:text-white"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        block && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {isBusy && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
