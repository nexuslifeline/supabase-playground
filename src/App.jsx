import "./App.css";

import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar/Sidebar";
import Timeline from "@components/Timeline/Timeline";
import RightPane from "@components/RightPane/RightPane";

function App() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-grow max-h-[calc(100vh-70px)]">
          <div className="flex-grow h-full p-5 overflow-auto">
            <Timeline />
          </div>
          <RightPane />
        </div>
      </div>
    </div>
  );
}

export default App;
