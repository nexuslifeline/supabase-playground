import { BsFiletypePdf } from "react-icons/bs";
import { BsFileEarmarkWord } from "react-icons/bs";
import { LiaFileAudioSolid } from "react-icons/lia";
import { LuFileVideo } from "react-icons/lu";
import { GoFile } from "react-icons/go";
import { MdOutlineCloudDownload } from "react-icons/md";

const getFileIcon = fileName => {
  const ext = fileName.split(".").pop().toLowerCase();

  const icons = {
    pdf: <BsFiletypePdf className="text-black w-9 h-9" />,
    docx: <BsFileEarmarkWord className="text-black w-9 h-9" />,
    doc: <BsFileEarmarkWord className="text-black w-9 h-9" />,
    mp3: <LiaFileAudioSolid className="text-black w-9 h-9" />,
    wav: <LiaFileAudioSolid className="text-black w-9 h-9" />,
    mp4: <LuFileVideo className="text-black w-9 h-9" />,
    avi: <LuFileVideo className="text-black w-9 h-9" />,
    mov: <LuFileVideo className="text-black w-9 h-9" />,
    mkv: <LuFileVideo className="text-black w-9 h-9" />,
    default: <GoFile className="text-black w-9 h-9" />
  };

  return icons[ext] || icons.default;
};

export default function FileList({ files }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {files.map((file, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 bg-white border rounded-md cursor-pointer hover:bg-gray-100 hover:border-black"
        >
          <div className="pt-1.5">{getFileIcon(file.name)}</div>
          <div className="flex flex-col items-start justify-start flex-grow">
            <span className="mt-2 text-sm font-semibold text-center truncate">
              {file.name}
            </span>
            <span className="text-sm text-gray-600">1.5mb</span>
          </div>
        </div>
      ))}
    </div>
  );
}
