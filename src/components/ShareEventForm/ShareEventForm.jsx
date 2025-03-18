import { useState } from "react";
import Tabs from "@components/Tabs/Tabs";
import UserPhoto from "@components/UserPhoto/UserPhoto";
import ProfilePhoto from "@assets/profile.jpeg";
import { RiImageAiLine } from "react-icons/ri";
import { RiFileVideoLine } from "react-icons/ri";
import { RiFolderMusicLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";

const ShareEventForm = () => {
  const [attachments, setAttachments] = useState({
    photo: null,
    video: null,
    audio: null
  });

  const handleFileChange = (type, event) => {
    setAttachments({ ...attachments, [type]: event.target.files[0] });
  };

  return (
    <div className="mx-auto bg-white">
      <div className="mt-4 space-y-2">
        {/* Title Input */}
        <label className="block text-sm font-medium text-gray-900">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter a title..."
          className="w-full p-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Message Input */}
        <label className="block text-sm font-medium text-gray-900">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Write your message..."
          className="w-full h-24 p-2 text-gray-700 bg-gray-100 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-start px-4 py-2 space-x-3 text-gray-500 border rounded-lg">
          <button className="hover:text-black">
            <RiImageAiLine className="w-6 h-6" />
          </button>
          <button className="hover:text-black">
            <RiFileVideoLine className="w-6 h-6" />
          </button>
          <button className="hover:text-black">
            <RiFolderMusicLine className="w-6 h-6" />
          </button>
          <button className="hover:text-black">
            <GrDocumentText className="w-5 h-5" />
          </button>
        </div>

        {/* Recipient Selection */}
        <label className="block text-sm font-medium text-gray-900">
          Recipients
        </label>
        <select
          name="recipient"
          placeholder="Assign recipients (e.g., John, Mom, Dad)"
          className="w-full p-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>chris14rueda@gmail.com</option>
          <option>gelynrueda@gmail.com</option>
        </select>

        {/* Date Input */}
        <label className="block text-sm font-medium text-gray-900">
          Release Date
        </label>
        <input
          type="date"
          name="date"
          className="w-full p-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button className="px-5 py-2 mt-4 text-white bg-black rounded-lg ">
          Create
        </button>
      </div>
    </div>
  );
};

export default ShareEventForm;
