import { useState, useRef, useEffect } from "react";

import Button from "@/components/Common/Button/Button";
import FormNavigation from "@/components/ShareEventForm/FormNavigation";
import MessageForm from "@/components/ShareEventForm/MessageForm";
import AttachmentForm from "@/components/ShareEventForm/AttachmentForm";
import { uploadFile } from "@services/storage";
import { saveMemory } from "@/services/memories";

import { RiImageAiLine } from "react-icons/ri";
import { RiFileVideoLine } from "react-icons/ri";
import { RiFolderMusicLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import TriggerForm from "./TriggerForm";

const ShareEventForm = () => {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <>
      <div className="flex">
        <div className="w-[300px] min-w-[300px] h-full p-4">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-2xl font-semibold">Create Message</h2>
            <p className="text-gray-500">
              Share cherished memories with loved ones and leave a lasting
              legacy for the future.
            </p>
          </div>
          <FormNavigation
            selectedIndex={selectedIndex}
            onSelectMenu={setSelectedIndex}
          />
        </div>
        <div className="flex-grow bg-white border p-7 rounded-xl border-zinc-200 min-h-[calc(100vh-200px)]">
          <input
            ref={fileInputRef}
            type="file"
            accept="*/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <MessageForm isVisible={selectedIndex === 0} />
          <AttachmentForm isVisible={selectedIndex === 1} />
          <TriggerForm isVisible={selectedIndex === 2} />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          onClick={handleCreate}
          isBusy={isSaving}
          disabled={isSaving}
          className="min-w-[100px]"
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default ShareEventForm;
