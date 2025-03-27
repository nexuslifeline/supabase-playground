import Timeline from "@components/Timeline/Timeline";
import RightPane from "@components/RightPane/RightPane";

const TimelinePage = () => {
  return (
    <>
      <div className="flex-grow h-full p-5 overflow-auto">
        <Timeline />
      </div>
      <RightPane />
    </>
  );
};

export default TimelinePage;
