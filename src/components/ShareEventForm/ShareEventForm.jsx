import { useState, useEffect } from "react";

import Button from "@/components/Common/Button/Button";
import FormNavigation from "@/components/ShareEventForm/FormNavigation";
import MessageForm from "@/components/ShareEventForm/MessageForm";
import AttachmentForm from "@/components/ShareEventForm/AttachmentForm";
import { saveMemory } from "@/services/memories";
import { saveFiles } from "@/services/files";

import TriggerForm from "./TriggerForm";

const ShareEventForm = () => {
  const [files, setFiles] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    if (!title?.trim()) {
      setErrors({ title: "Please enter a title. This field is required." });
      return false;
    }

    return true;
  };

  const handleCreate = async () => {
    setErrors({});
    setIsSaving(true);

    try {
      if (!validateForm()) return;

      const payload = { title, message };
      const promises = [saveMemory(payload)];

      const [newMemory] = await Promise.all(promises);

      if (files.length > 0) {
        await saveFiles(files.map(v => ({ ...v, memoryId: newMemory.id })));
      }
    } catch (err) {
      console.error("Error in handleCreate:", err);
    } finally {
      setTimeout(() => {
        setIsSaving(false);
      }, 350);
    }
  };

  useEffect(() => {
    if (title) {
      setErrors({});
    }
  }, [title]);

  useEffect(() => {
    console.log("files", files);
  }, [files]);

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
          <MessageForm
            setTitle={setTitle}
            setMessage={setMessage}
            errors={errors}
            isVisible={selectedIndex === 0}
          />
          <AttachmentForm
            onFileUpload={setFiles}
            isVisible={selectedIndex === 1}
          />
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
