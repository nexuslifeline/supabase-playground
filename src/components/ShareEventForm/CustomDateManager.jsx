import cn from "classnames";

import SectionHeader from "@components/ShareEventForm/SectionHeader";
import RecipientSelector from "@components/ShareEventForm/RecipientSelector";
import Badge from "@components/Badge/Badge";
import ProfilePhoto1 from "@assets/profile-girl-1.jpeg";
import ProfilePhoto2 from "@assets/profile-girl-2.jpeg";

const events = [
  {
    label: "Personal Message",
    date: "Jan 16",
    badge: "Yearly",
    photo: ProfilePhoto2,
    checked: true
  },
  {
    label: "Graduation - Elementary",
    date: "April 16, 2035",
    badge: null,
    photo: ProfilePhoto1,
    checked: true
  }
];

const CustomDateManager = ({ isVisible = false }) => {
  return (
    <>
      <div className={cn("w-full space-y-3", !isVisible && "hidden")}>
        <SectionHeader
          title="Recipients"
          description="Select recipients to schedule messages for custom dates, such as a product launch, personal reminder, or any meaningful occasion."
        />

        <RecipientSelector />
      </div>
      <div className={cn("w-full space-y-3", !isVisible && "hidden")}>
        <SectionHeader
          title="Custom Date of Release"
          description="Add a custom release date for the message. You can set multiple dates with intervals or choose to send it just once."
        />

        <div className="w-full border border-gray-200 rounded-md">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex w-full gap-3 px-4 py-2.5 border-b border-gray-200 cursor-pointer"
            >
              <span className="inline-flex items-center flex-grow gap-3">
                {event.label}
                {event.badge && <Badge text={event.badge} size="sm" />}
              </span>
              <span className="text-gray-500">{event.date}</span>
              {/* <UserPhoto src={event.photo} size="h-6 w-6" className="relative" /> */}
            </div>
          ))}
          <div className="flex items-center justify-center w-full gap-3 px-4 py-2.5 font-semibold cursor-pointer hover:bg-gray-100">
            + Add custom date
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDateManager;
