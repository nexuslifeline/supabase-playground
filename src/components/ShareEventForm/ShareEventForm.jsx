import { useState } from "react";
import { FaCamera, FaVideo, FaMicrophone } from "react-icons/fa";

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
    <div className="p-6 mx-auto space-y-3 bg-white">
      <h2 className="text-lg font-semibold text-gray-900">Create a Memory</h2>

      {/* Title Input */}
      <label className="block text-sm font-medium text-gray-900">Title</label>
      <input
        type="text"
        name="title"
        placeholder="Enter a title..."
        className="w-full p-2 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Message Input */}
      <label className="block text-sm font-medium text-gray-900">Message</label>
      <textarea
        name="message"
        placeholder="Write your message..."
        className="w-full h-24 p-2 text-gray-700 bg-gray-100 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Recipient Selection */}
      <label className="block text-sm font-medium text-gray-900">
        Recipients
      </label>
      <input
        type="text"
        name="recipient"
        placeholder="Assign recipients (e.g., John, Mom, Dad)"
        className="w-full p-2 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Release Trigger Selection */}
      <label className="block text-sm font-medium text-gray-900">
        Release Trigger
      </label>
      <select
        name="trigger"
        className="w-full p-2 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Release Trigger</option>
        <option value="posthumous">Posthumous Delivery</option>
        <option value="anniversary">Anniversary</option>
        <option value="milestone">Milestone</option>
        <option value="life_event">Life Event</option>
      </select>

      {/* Date Input */}
      <label className="block text-sm font-medium text-gray-900">
        Release Date
      </label>
      <input
        type="date"
        name="date"
        className="w-full p-2 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Attachments */}
      <label className="block text-sm font-medium text-gray-900">
        Attachments
      </label>
      <div className="flex gap-3 mt-2">
        <label className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 border rounded cursor-pointer hover:bg-gray-200">
          <FaCamera /> Photo
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={e => handleFileChange("photo", e)}
          />
        </label>
        <label className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 border rounded cursor-pointer hover:bg-gray-200">
          <FaVideo /> Video
          <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={e => handleFileChange("video", e)}
          />
        </label>
        <label className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 border rounded cursor-pointer hover:bg-gray-200">
          <FaMicrophone /> Audio
          <input
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={e => handleFileChange("audio", e)}
          />
        </label>
      </div>

      {/* Submit Button */}
      <button className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700">
        Save Memory
      </button>
    </div>
  );
};

export default ShareEventForm;
