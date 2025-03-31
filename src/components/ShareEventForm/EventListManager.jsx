import React from "react";

import cn from "classnames";

import SectionHeader from "@components/ShareEventForm/SectionHeader";
import RecipientSelector from "@components/ShareEventForm/RecipientSelector";
import Badge from "@components/Badge/Badge";
import UserPhoto from "@components/UserPhoto/UserPhoto";
import ProfilePhoto1 from "@assets/profile-girl-1.jpeg";
import ProfilePhoto2 from "@assets/profile-girl-2.jpeg";

import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";

const events = [
  {
    label: "Anniversary",
    date: "Jan 16",
    badge: "Yearly",
    photo: ProfilePhoto2
  },
  {
    label: "Birthday",
    date: "Sept 24",
    badge: "Yearly",
    photo: ProfilePhoto1
  },
  {
    label: "Christmas",
    date: "Dec 25",
    badge: "Yearly",
    photo: ProfilePhoto2
  }
];

const EventListManager = ({ isVisible = false }) => {
  const [visibleRows, setVisibleRows] = useState([]);

  const toggleRow = rowIndex => {
    if (!visibleRows.includes(rowIndex)) {
      setVisibleRows(p => [...p, rowIndex]);
    } else {
      setVisibleRows(p => p.filter(i => i !== rowIndex));
    }
  };

  return (
    <div className={cn("w-full space-y-3", !isVisible && "hidden")}>
      <SectionHeader
        title="Events"
        description="Add a custom release date for the message. You can set multiple dates with intervals or choose to send it just once."
      />
      <div className="w-full border border-gray-200 rounded-md">
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <div
              className="flex w-full gap-3 px-3 py-2.5 border-b border-gray-200 cursor-pointer"
              onClick={() => toggleRow(index)}
            >
              <button className="p-1 rounded-md hover:bg-gray-100">
                {!visibleRows.includes(index) ? (
                  <IoChevronForwardOutline className="w-4 h-4" />
                ) : (
                  <IoChevronDownOutline className="w-4 h-4" />
                )}
              </button>

              <span className="inline-flex items-center flex-1 gap-3">
                {event.label}
                {event.badge && <Badge text={event.badge} size="sm" />}
              </span>

              <span className="inline-flex justify-end flex-1 gap-1">
                <UserPhoto
                  src={ProfilePhoto2}
                  size="h-6 w-6"
                  className="relative"
                />
                <UserPhoto
                  src={ProfilePhoto1}
                  size="h-6 w-6"
                  className="relative"
                />
              </span>

              <span className="min-w-[70px] text-right text-gray-500">
                {event.date}
              </span>
            </div>
            <div
              className={cn(
                "flex bg-gray-100 p-5 border-b border-gray-200",
                !visibleRows.includes(index) && "hidden"
              )}
            >
              <RecipientSelector />
            </div>
          </React.Fragment>
        ))}
        <div className="flex items-center justify-center w-full gap-3 px-4 py-2.5 font-semibold cursor-pointer hover:bg-gray-100">
          + Add new event
        </div>
      </div>
    </div>
  );
};

export default EventListManager;
