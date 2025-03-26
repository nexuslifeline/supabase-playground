import cn from "classnames";
import Spinner from "@components/Common/Spinner/Spinner";

const Button = ({
  disabled,
  isBusy = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        `inline-flex justify-center items-center gap-2 px-5 py-2 mt-4 text-white bg-black rounded-lg transition-opacity duration-200 hover:opacity-80`,
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
