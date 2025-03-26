import { useState } from "react";
import cn from "classnames";

import ProfilePhoto from "@assets/profile-boy-1.webp";
import ProfilePhoto1 from "@assets/profile-girl-1.jpeg";
import ProfilePhoto2 from "@assets/profile-girl-2.jpeg";

import UserPhoto from "@components/UserPhoto/UserPhoto";
import SegmentedControl from "@components/Common/SegmentedControl/SegmentedControl";

const recipients = [
  {
    id: 1,
    name: "Paul Rueda",
    relation: "Friend",
    photo: ProfilePhoto
  },
  {
    id: 2,
    name: "Kai Rueda",
    relation: "Child",
    photo: ProfilePhoto1
  },
  {
    id: 3,
    name: "Gelyn Rueda",
    relation: "Wife",
    photo: ProfilePhoto2
  }
];

const options = [
  { label: "Custom", value: "date" },
  { label: "Event Based", value: "event" }
];

const RecipientForm = ({ isVisible = false }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const toggleSelect = id => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={cn("space-y-10", !isVisible && "hidden")}>
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Recipients</h2>
        <p className="text-gray-500">
          Select recipients to schedule messages for events like birthdays or
          anniversaries, with optional attachments.
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center flex-grow gap-4 px-4 py-1.5 rounded-md hover:bg-gray-100 min-w-[220px] max-w-[220px]">
            <span className="inline-flex items-center justify-center text-xl border border-gray-500 border-dashed rounded-full min-h-10 min-w-10">
              +
            </span>
            Add member
          </button>

          {recipients.map(recipient => (
            <div
              key={recipient.id}
              onClick={() => toggleSelect(recipient.id)}
              className={cn(
                "flex-grow inline-flex items-center gap-3 py-1 pl-3 pr-5 rounded-md cursor-pointer max-w-[220px] transition",
                selectedIds.includes(recipient.id)
                  ? "bg-blue-100 ring-2 ring-blue-400"
                  : "hover:bg-gray-200"
              )}
            >
              <UserPhoto
                src={recipient.photo}
                size="h-11 w-11"
                className="relative"
              />
              <div className="flex flex-col">
                <span className="text-base font-semibold">
                  {recipient.name}
                </span>
                <span className="text-sm text-gray-600">
                  {recipient.relation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Message Trigger</h2>
        <div className="flex">
          <p className="flex-grow text-gray-500">
            Select how to trigger the message—on a set date or automatically on
            the recipient’s events or milestones.
          </p>
          <div className="flex-grow">
            <SegmentedControl options={options} selectedIndex={selectedIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientForm;
