import { useNavigate, useLocation } from "react-router-dom";
import { LuChartPie } from "react-icons/lu";
import { MdTimeline, MdOutlineManageAccounts } from "react-icons/md";
import { TbLabelImportant } from "react-icons/tb";

import Logo from "@components/Logo/Logo";
import { supabase } from "@/supabaseConfig";

const menuItems = [
  { name: "Analytics", icon: LuChartPie, path: "/analytics" },
  { name: "Timeline", icon: MdTimeline, path: "/timeline" },
  { name: "My Profile", icon: MdOutlineManageAccounts, path: "/profile" },
  { name: "Upcoming Events", icon: TbLabelImportant, path: "/upcoming-events" }
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="hidden h-screen p-3 border-r min-w-72 border-zinc-300 md:inline-flex md:flex-col">
      {/* Logo */}
      <div className="px-3 py-2">
        <Logo />
      </div>

      {/* Menu List */}
      <ul className="space-y-1 mt-7">
        {menuItems.map(({ name, icon: Icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <li
              key={name}
              className={`flex gap-4 px-4 py-2.5 rounded-md cursor-pointer transition-colors
                ${isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
              onClick={() => navigate(path)}
            >
              <Icon className="w-6 h-6" />
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
