import { useState } from "react";

import cn from "classnames";

import SectionHeader from "@components/ShareEventForm/SectionHeader";
import SegmentedControl from "@components/Common/SegmentedControl/SegmentedControl";
import EventListManager from "@components/ShareEventForm/EventListManager";
import CustomDateManager from "@components/ShareEventForm/CustomDateManager";

const options = [
  { label: "Custom", value: "date" },
  { label: "Event Based", value: "event" }
];

const TriggerForm = ({ isVisible = false }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={cn("space-y-8", !isVisible && "hidden")}>
      <SectionHeader
        title="Release Trigger"
        description="Select how to trigger the message—on a set date or automatically on
      the recipient’s events or milestones."
      >
        <div className="flex-grow">
          <SegmentedControl
            options={options}
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
          />
        </div>
      </SectionHeader>
      <CustomDateManager isVisible={selectedIndex === 0} />
      <EventListManager isVisible={selectedIndex === 1} />
    </div>
  );
};

export default TriggerForm;
