import { useState, useRef, useEffect } from "react";

import Button from "@/components/Common/Button/Button";
import TextInput from "@components/Common/TextInput/TextInput";
import TextArea from "@components/Common/TextArea/TextArea";
import { uploadFile } from "@services/storage";
import { saveMemory } from "@/services/memories";

import { RiImageAiLine } from "react-icons/ri";
import { RiFileVideoLine } from "react-icons/ri";
import { RiFolderMusicLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";

const ShareEventForm = () => {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleBrowse = () => {
    console.log("test");
    fileInputRef.current.click();
  };

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const validateForm = () => {
    if (!title?.trim()) {
      setErrors({ title: "Title is required!" });
      return false;
    }

    return true;
  };

  const handleCreate = async () => {
    setErrors({});

    setIsUploading(true);
    setIsSaving(true);

    try {
      if (!validateForm()) return;

      const payload = { title, message };
      if (releaseDate) {
        payload.releaseDate = releaseDate;
      }

      const promises = [saveMemory(payload)];

      if (file) {
        promises.push(uploadFile(file));
      }

      const [newMemory] = await Promise.all(promises);
    } catch (err) {
      console.error("Error in handleCreate:", err);
    } finally {
      setTimeout(() => {
        setIsUploading(false);
        setIsSaving(false);
      }, 350);
    }
  };

  useEffect(() => {
    if (title) {
      setErrors({});
    }
  }, [title]);

  return (
    <div className="mx-auto bg-white">
      <input
        ref={fileInputRef}
        type="file"
        accept="*/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="mt-4 space-y-2">
        {/* Title Input */}
        <label className="block text-sm font-medium text-gray-900">Title</label>
        <TextInput
          name="title"
          placeholder="Enter a title..."
          onChange={e => setTitle(e.target.value)}
          error={errors?.title}
        />

        {/* Message Input */}
        <label className="block text-sm font-medium text-gray-900">
          Message
        </label>
        <TextArea
          name="message"
          placeholder="Write your message..."
          onChange={e => setMessage(e.target.value)}
        />

        <div className="flex justify-start px-4 py-2 space-x-3 text-gray-500 border rounded-lg">
          <button onClick={handleBrowse} className="hover:text-black">
            <RiImageAiLine className="w-6 h-6" />
          </button>
          <button onClick={handleBrowse} className="hover:text-black">
            <RiFileVideoLine className="w-6 h-6" />
          </button>
          <button onClick={handleBrowse} className="hover:text-black">
            <RiFolderMusicLine className="w-6 h-6" />
          </button>
          <button onClick={handleBrowse} className="hover:text-black">
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
        <TextInput
          type="date"
          name="date"
          onChange={e => setReleaseDate(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button onClick={handleCreate} isBusy={isSaving} disabled={isSaving}>
          Create
        </Button>
      </div>
    </div>
  );
};

export default ShareEventForm;
