import ProfileDropdown from "@components/Header/ProfileDropdown";

import { TbBellHeart } from "react-icons/tb";
import { TbMessageHeart } from "react-icons/tb";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="flex items-center justify-end w-full min-h-[70px] px-4 border-b border-zinc-300">
      <button className="p-2 rounded-full hover:bg-gray-200">
        <HiMiniMagnifyingGlass className="w-6 h-6" />
      </button>
      <ul className="inline-flex gap-2 ml-auto mr-8">
        <li>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <TbMessageHeart className="w-6 h-6" />
          </button>
        </li>
        <li>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <TbBellHeart className="w-6 h-6" />
          </button>
        </li>
      </ul>
      <ProfileDropdown />
    </div>
  );
};

export default Header;
