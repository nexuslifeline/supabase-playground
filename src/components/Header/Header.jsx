import UserPhoto from "../UserPhoto/UserPhoto";
import ProfilePhoto from "../../assets/profile.jpeg";

const Header = () => {
  return (
    <div className="flex items-center justify-end w-full min-h-[70px] px-4 border-b border-zinc-300">
      <UserPhoto src={ProfilePhoto} />
    </div>
  );
};

export default Header;
