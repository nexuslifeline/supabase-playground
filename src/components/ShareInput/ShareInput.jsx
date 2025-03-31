import ProfilePhoto from "@components/ProfilePhoto/ProfilePhoto";

import { RiImageAiLine } from "react-icons/ri";
import { RiFileVideoLine } from "react-icons/ri";
import { RiFolderMusicLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { ImAttachment } from "react-icons/im";

export default function ShareInput({ onShare }) {
  return (
    <div className="flex items-center p-3 bg-gray-100 rounded-lg shadow-sm">
      <ProfilePhoto size="9" />
      <input
        type="text"
        placeholder="Share a heartfelt message for your loved one’s milestones or future events."
        className="flex-1 px-5 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
        onFocus={onShare}
      />
      <div className="flex mr-1 space-x-3 text-gray-600" onClick={onShare}>
        {/* <button className="hover:text-black">
          <RiImageAiLine className="w-6 h-6" />
        </button>
        <button className="hover:text-black">
          <RiFileVideoLine className="w-6 h-6" />
        </button>
        <button className="hover:text-black">
          <RiFolderMusicLine className="w-6 h-6" />
        </button> */}
        <button className="hover:text-black">
          <ImAttachment className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
