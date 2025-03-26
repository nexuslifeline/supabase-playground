import cn from "classnames";

import { GrTrigger } from "react-icons/gr";
import { FiMessageSquare } from "react-icons/fi";
import { RiUserSettingsLine } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";

const items = [
  { text: "Message", icon: FiMessageSquare },
  { text: "Attachments", icon: ImAttachment },
  // { text: "Recipients", icon: RiUserSettingsLine },
  { text: "Trigger & Recipients", icon: GrTrigger }
];

const FormNavigation = ({ selectedIndex = 0, onSelectMenu }) => {
  return (
    <ul className="w-full mt-8 space-y-1">
      {items.map((item, idx) => {
        const { text, icon: Icon } = item;
        const isSelected = selectedIndex === idx;
        return (
          <li
            key={idx}
            onClick={() => onSelectMenu(idx)}
            className={cn(
              "flex items-center justify-between px-4 py-2 cursor-pointer rounded-xl transition-colors group",
              isSelected
                ? "bg-gray-200 font-semibold text-blue-600"
                : "text-black hover:bg-gray-100"
            )}
          >
            <div className="flex items-center gap-4">
              <Icon className="w-4 h-4" />
              {text}
            </div>
            {isSelected && (
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default FormNavigation;
