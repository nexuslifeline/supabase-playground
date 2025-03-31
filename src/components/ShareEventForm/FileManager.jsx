import { useRef, useState, useCallback } from "react";

import FileList from "@components/FileList/FileList";
import Spinner from "@components/Common/Spinner/Spinner";
import { uploadFile } from "@services/storage";

import { FiUploadCloud } from "react-icons/fi";

const FileManager = ({ onFileChange }) => {
  const fileInputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);

  const formatFileSize = bytes => {
    if (bytes < 1024) return `${bytes} B`;
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    const mb = kb / 1024;
    return `${mb.toFixed(1)} MB`;
  };

  const processFiles = async selectedFiles => {
    if (selectedFiles.length === 0) return;

    setIsUploading(true);
    const filesArray = Array.from(selectedFiles);

    const uploadResults = await Promise.all(
      filesArray.map(async file => {
        try {
          const result = await uploadFile(file);
          if (result?.path) {
            return {
              name: file.name,
              size: formatFileSize(file.size),
              type: file.type || "unknown",
              path: result.path
            };
          }
        } catch (error) {
          console.error(`Error uploading ${file.name}:`, error);
          return null;
        }
      })
    );

    const successfulUploads = uploadResults.filter(Boolean);
    const paths = successfulUploads.map(file => file.path);

    setUploadedFiles(prev => [...prev, ...successfulUploads]);
    if (paths.length > 0) {
      onFileChange?.(paths);
    }

    setIsUploading(false);
  };

  const handleFileChange = e => {
    processFiles(e.target.files);
    e.target.value = null;
  };

  const handleDrop = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  }, []);

  const handleBrowse = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="*/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      <div
        onClick={handleBrowse}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-md min-h-[150px] cursor-pointer transition-all duration-200 ${
          isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-400"
        } ${
          isUploading
            ? "opacity-70 pointer-events-none"
            : "hover:bg-gray-100 hover:shadow-sm"
        }`}
      >
        {isUploading ? (
          <Spinner />
        ) : (
          <>
            <FiUploadCloud className="w-8 h-8 text-gray-600" />
            <p className="mt-4 font-semibold text-center">
              Drop your files here
            </p>
            <p className="text-sm text-gray-500">
              or,{" "}
              <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
                click to browse
              </span>{" "}
              or drag & drop
            </p>
          </>
        )}
      </div>

      <FileList files={uploadedFiles} />
    </>
  );
};

export default FileManager;
