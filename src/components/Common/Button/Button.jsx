import Spinner from "@components/Common/Spinner/Spinner";

const Button = ({ disabled, isBusy = false, ...props }) => {
  return (
    <button
      className={`inline-flex gap-2 px-5 py-2 mt-4 text-white bg-black rounded-lg ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      {...props}
    >
      {isBusy && <Spinner />}
      Create
    </button>
  );
};

export default Button;
