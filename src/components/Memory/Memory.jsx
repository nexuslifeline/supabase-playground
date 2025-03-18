import { FaChevronDown } from "react-icons/fa6";

import ProfilePhoto from "@assets/profile-boy-1.webp";
import ProfilePhoto1 from "@assets/profile-girl-1.jpeg";
import ProfilePhoto2 from "@assets/profile-girl-2.jpeg";
import UserPhoto from "@components/UserPhoto/UserPhoto";
import Badge from "@components/Badge/Badge";
import FileList from "@components/FileList/FileList";

const Memory = ({
  data: { title = "", message = "", files = [], date, status }
}) => {
  return (
    <div className="w-full p-6 space-y-6 bg-white border rounded-lg">
      <div className="flex items-start">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">{title}</p>
          <span className="flex items-center gap-3 text-sm text-gray-600">
            To:
            <div className="flex gap-1">
              <UserPhoto
                src={ProfilePhoto}
                size="h-5 w-5"
                className="relative"
              />
              Paul Christian Rueda
            </div>
            <div className="flex gap-1">
              <UserPhoto
                src={ProfilePhoto2}
                size="h-5 w-5"
                className="relative"
              />
              Gelyn Rueda
            </div>
            <button>
              <FaChevronDown />
            </button>
          </span>
        </div>

        <div className="flex flex-col items-end gap-2 ml-auto">
          <Badge text={status} />
          <span className="text-sm text-gray-600">{date}</span>
        </div>
      </div>
      <div className="py-8 space-y-8 border-t">
        <p className="text-gray-600 ">{message}</p>

        <FileList files={files} />
      </div>
    </div>
  );
};

export default Memory;
