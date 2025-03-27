import { useNavigate } from "react-router-dom";

import { supabase } from "@/supabaseConfig";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="hidden h-screen border-r min-w-64 border-zinc-300 md:inline-flex">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
