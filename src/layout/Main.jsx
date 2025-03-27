import { Outlet } from "react-router-dom";

import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-grow max-h-[calc(100vh-70px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
