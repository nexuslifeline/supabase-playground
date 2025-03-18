import { useState } from "react";
import Tabs from "@components/Tabs/Tabs";
import UserPhoto from "@components/UserPhoto/UserPhoto";
import ProfilePhoto from "@assets/profile.jpeg";
import { RiImageAiLine } from "react-icons/ri";
import { RiFileVideoLine } from "react-icons/ri";
import { RiFolderMusicLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";

const ContactForm = () => {
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
        <label className="block text-sm font-medium text-gray-900">Name</label>
        <input
          type="text"
          name="title"
          placeholder="Name"
          className="w-full p-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-900">Email</label>
        <input
          type="text"
          name="title"
          placeholder="Email"
          className="w-full p-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Recipient Selection */}
        <label className="block text-sm font-medium text-gray-900">
          Relation
        </label>
        <select
          name="relation"
          className="w-full p-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Spouse</option>
          <option>Child</option>
          <option>Sibling</option>
          <option>Other</option>
        </select>

        {/* Date Input */}
        <label className="block text-sm font-medium text-gray-900">
          Birthday
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

export default ContactForm;
