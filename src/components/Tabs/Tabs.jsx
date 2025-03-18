import { useState } from "react";

export default function Tabs({ tabs, children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex w-full my-3 border-b border-gray-300">
      <div className="flex flex-grow">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-center py-3 px-6 text-gray-600 
                        relative 
                        ${activeTab === index ? "font-semibold" : ""}`}
          >
            {tab}
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
            )}
          </button>
        ))}
      </div>
      <div className="flex flex-grow-0">{children}</div>
    </div>
  );
}
