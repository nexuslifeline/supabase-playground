import ProfilePhoto from "@components/ProfilePhoto/ProfilePhoto";

import { useSession } from "@store/session";

const Header = () => {
  const { session, getUserInitials } = useSession();

  console.log("header", getUserInitials());

  return (
    <div className="flex items-center justify-end w-full min-h-[70px] px-4 border-b border-zinc-300">
      <ProfilePhoto />
    </div>
  );
};

export default Header;
