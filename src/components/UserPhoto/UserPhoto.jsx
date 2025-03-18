import cx from "classnames";

const UserPhoto = ({
  src,
  alt = "User Avatar",
  size = "w-12 h-12",
  className
}) => {
  return (
    <div
      className={cx(
        `rounded-full overflow-hidden cursor-pointer border border-white ${size}`,
        className
      )}
    >
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
};

export default UserPhoto;
