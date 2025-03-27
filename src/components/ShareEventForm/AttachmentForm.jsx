import cn from "classnames";

import SectionHeader from "@components/ShareEventForm/SectionHeader";
import FileManager from "@components/ShareEventForm/FileManager";

const AttachmentForm = ({ isVisible = false }) => {
  return (
    <div className={cn("space-y-4", !isVisible && "hidden")}>
      <SectionHeader
        title="Attachments"
        description="Attach audio, video, or any other files you'd like to send to your recipients once the defined event is triggered."
      />
      <FileManager />
    </div>
  );
};

export default AttachmentForm;
