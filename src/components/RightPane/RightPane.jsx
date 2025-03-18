import { FaEllipsis } from "react-icons/fa6";

import ProfilePhoto from "@assets/profile-boy-1.webp";
import ProfilePhoto1 from "@assets/profile-girl-1.jpeg";
import ProfilePhoto2 from "@assets/profile-girl-2.jpeg";
import UserPhoto from "@components/UserPhoto/UserPhoto";

const RightPane = () => {
  return (
    <div className="flex-col items-start hidden h-full gap-4 p-5 border-l min-w-72 border-zinc-300 md:inline-flex">
      <div className="flex items-center w-full">
        <span className="text-lg font-semibold">Contacts</span>
        <button className="ml-auto cursor-pointer">
          <FaEllipsis />
        </button>
      </div>
      <div className="w-full">
        <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-200">
          <UserPhoto src={ProfilePhoto} size="h-10 w-10" className="relative" />
          <div className="flex flex-col">
            <span className="text-base font-semibold">
              Paul Christian Rueda
            </span>
            <span className="text-sm text-gray-600">
              chris14rueda@gmail.com
            </span>
          </div>
        </div>

        <div className="flex items-center w-full gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-200">
          <UserPhoto
            src={ProfilePhoto1}
            size="h-10 w-10"
            className="relative"
          />
          <div className="flex flex-col">
            <span className="text-base font-semibold">Kai Rueda</span>
            <span className="text-sm text-gray-600">kairueda@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center w-full gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-200">
          <UserPhoto
            src={ProfilePhoto2}
            size="h-10 w-10"
            className="relative"
          />
          <div className="flex flex-col">
            <span className="text-base font-semibold">Gelyn Rueda</span>
            <span className="text-sm text-gray-600">gelynrueda@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPane;
