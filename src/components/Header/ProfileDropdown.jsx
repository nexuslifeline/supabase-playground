import { useState } from "react";

import { Popover } from "@headlessui/react";

import Spinner from "@components/Common/Spinner/Spinner";
import ProfilePhoto from "@components/ProfilePhoto/ProfilePhoto";
import { supabase } from "@/supabaseConfig";
import { useSession } from "@store/session";

const ProfileDropdown = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { getEmail, getFullName, clearSession, session } = useSession();

  const handleLogout = async () => {
    try {
      setIsProcessing(true);
      await supabase.auth.signOut();
      clearSession();
      navigate("/");
    } catch (err) {
    } finally {
      setIsProcessing(false);
    }
  };

  console.log("session", session);

  const menuItemClasses =
    "cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 focus:bg-gray-200 focus:outline-none transition-colors";

  return (
    <Popover className="relative">
      <Popover.Button className="focus:outline-none">
        <ProfilePhoto />
      </Popover.Button>

      <Popover.Panel className="absolute right-0 mt-2 z-10 shadow-xl border border-gray-100 rounded-md w-[250px] bg-white">
        {/* ProfileDropdown */}
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold">{getFullName()}</h2>
          <p className="text-sm text-gray-400">{getEmail()}</p>
        </div>

        {/* Section 1 */}
        <ul className="px-2 py-1.5 border-b border-gray-100">
          <li className={menuItemClasses}>My Profile</li>
          <li className={menuItemClasses}>Account Settings</li>
        </ul>

        {/* Section 2 */}
        <ul className="px-2 py-1.5 border-b border-gray-100">
          <li className={menuItemClasses}>My Messages</li>
          <li className={menuItemClasses}>My Families & Friends</li>
          <li className={menuItemClasses}>Upcoming Events</li>
        </ul>

        {/* Sign Out */}
        <ul className="px-2 py-1.5">
          <li
            className={`${menuItemClasses} flex justify-between`}
            onClick={handleLogout}
          >
            Sign out
            {isProcessing && <Spinner />}
          </li>
        </ul>
      </Popover.Panel>
    </Popover>
  );
};

export default ProfileDropdown;
