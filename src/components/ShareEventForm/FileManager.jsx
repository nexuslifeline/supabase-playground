import FileList from "@components/FileList/FileList";

import { FiUploadCloud } from "react-icons/fi";

const files = [
  { name: "wedding_day.mp4", size: "25mb", type: "mp4" },
  { name: "love_song.mp3", size: "3mb", type: "mp3" },
  { name: "vows.pdf", size: "500kb", type: "pdf" },
  { name: "photo_album.zip", size: "30mb", type: "zip" }
];

const FileManager = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 border border-gray-400 border-dashed rounded-md min-h-[150px] cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:shadow-sm">
        <FiUploadCloud className="w-8 h-8 text-gray-600" />
        <p className="mt-4 font-semibold text-center">
          Upload audio, video, photos, or documents
        </p>
        <p className="text-sm text-gray-500">
          or,{" "}
          <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
            click to browse
          </span>
        </p>
      </div>

      <FileList files={files} />
    </>
  );
};

export default FileManager;
