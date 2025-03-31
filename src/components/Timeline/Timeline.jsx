import { useState, useEffect } from "react";

import ShareInput from "@components/ShareInput/ShareInput";
import Tabs from "@components/Tabs/Tabs";
import Modal from "@/components/Modal/Modal";
import ShareEventForm from "@/components/ShareEventForm/ShareEventForm";
import Memory from "@/components/Memory/Memory";
import { useSession } from "@/store/session";

import { LuLayoutGrid } from "react-icons/lu";
import { RiFileListLine } from "react-icons/ri";

const events = [
  {
    title: "A Heartfelt Journey Through Our Memories",
    recipients: [
      { name: "Paul Christian Rueda", avatar: "paul.jpg" },
      { name: "Gelyn Rueda", avatar: "gelyn.jpg" }
    ],
    status: "Scheduled",
    date: "10 Dec 2024 10:00pm",
    message: `My love and dear children, this video is a special gift—a tribute to the beautiful journey we've shared as a family.
              It’s a compilation of our most cherished moments, from our first adventures together to the little everyday joys that make our bond so special.
              Watching these memories come to life reminds me how blessed I am to have you all by my side.`,
    files: [
      { name: "document.pdf", size: "1.5mb", type: "pdf" },
      { name: "report.docx", size: "1.5mb", type: "docx" },
      { name: "song.mp3", size: "1.5mb", type: "mp3" },
      { name: "video.mp4", size: "1.5mb", type: "mp4" },
      { name: "unknown.xyz", size: "1.5mb", type: "unknown" }
    ]
  },
  {
    title: "Wedding Anniversary Memories",
    recipients: [{ name: "Mark & Anna Thompson", avatar: "mark-anna.jpg" }],
    status: "Delivered",
    date: "14 Feb 2024 8:00pm",
    message: `Celebrating 10 years of love and partnership. From the first time we met to this very day, every moment has been special. 
              Thank you for a decade of laughter, love, and adventures. Here’s to many more!`,
    files: [
      { name: "wedding_day.mp4", size: "25mb", type: "mp4" },
      { name: "love_song.mp3", size: "3mb", type: "mp3" },
      { name: "vows.pdf", size: "500kb", type: "pdf" },
      { name: "photo_album.zip", size: "30mb", type: "zip" }
    ]
  },
  {
    title: "Baby’s First Year Compilation",
    recipients: [{ name: "Sarah & Jake", avatar: "sarah-jake.jpg" }],
    status: "Draft",
    date: "01 Mar 2025 6:00pm",
    message: `A whole year of firsts! From the first cry to the first step, this is a collection of memories of our little one’s amazing journey.
              Watching these moments reminds us of how fast time flies. We love you so much!`,
    files: [
      { name: "first_laugh.mp4", size: "15mb", type: "mp4" },
      { name: "baby_photos.zip", size: "50mb", type: "zip" },
      { name: "first_words.mp3", size: "2mb", type: "mp3" },
      { name: "growth_chart.pdf", size: "1mb", type: "pdf" }
    ]
  },
  {
    title: "Family Christmas Celebration 2023",
    recipients: [{ name: "The Rueda Family", avatar: "rueda_family.jpg" }],
    status: "Delivered",
    date: "25 Dec 2023 11:59pm",
    message: `The most wonderful time of the year! This Christmas, we gathered, we laughed, and we shared love as a family.
              From gift-giving to heartfelt toasts, these moments will forever be in our hearts. Happy holidays!`,
    files: [
      { name: "family_christmas.mp4", size: "30mb", type: "mp4" },
      { name: "holiday_music.mp3", size: "5mb", type: "mp3" },
      { name: "christmas_photos.zip", size: "40mb", type: "zip" },
      { name: "thank_you_letter.pdf", size: "700kb", type: "pdf" }
    ]
  }
];

function Timeline() {
  const { getUserUid } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    console.log("getUserUid", getUserUid());
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="lg"
        hasClose={false}
      >
        <ShareEventForm />
      </Modal>
      <ShareInput onShare={handleShare} />
      <Tabs tabs={["All", "Memories", "Reminders", "Time Capsules"]}>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-full bg-slate-200">
            <RiFileListLine className="w-5 h-5 text-black hover:text-black" />
          </button>
          <button>
            <LuLayoutGrid className="w-5 h-5 text-gray-500 hover:text-black" />
          </button>
        </div>
      </Tabs>

      <div className="py-4 space-y-6">
        {events.map((data, idx) => (
          <Memory key={idx} data={data} />
        ))}
      </div>
    </>
  );
}

export default Timeline;
