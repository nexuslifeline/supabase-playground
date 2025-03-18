import { useState } from "react";

import { FaEllipsis } from "react-icons/fa6";

import ProfilePhoto from "@assets/profile-boy-1.webp";
import ProfilePhoto1 from "@assets/profile-girl-1.jpeg";
import ProfilePhoto2 from "@assets/profile-girl-2.jpeg";
import UserPhoto from "@components/UserPhoto/UserPhoto";
import Modal from "@/components/Modal/Modal";
import ContactForm from "@/components/ContactForm/ContactForm";

import { FiPlus } from "react-icons/fi";

const RightPane = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddContact = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Modal
        title="Add Family & Friends"
        description="Add loved ones to send messages on life milestones or future dates."
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ContactForm />
      </Modal>
      <div className="flex-col items-start hidden h-full gap-4 p-5 border-l min-w-72 border-zinc-300 md:inline-flex">
        <div className="flex items-center w-full">
          <span className="text-lg font-semibold">Family & Friends</span>
          <button className="ml-auto cursor-pointer">
            <FaEllipsis />
          </button>
        </div>
        <div className="flex-grow w-full">
          <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-200">
            <UserPhoto
              src={ProfilePhoto}
              size="h-10 w-10"
              className="relative"
            />
            <div className="flex flex-col">
              <span className="text-base font-semibold">
                Paul Christian Rueda
              </span>
              <span className="text-sm text-gray-600">
                chris14rueda@gmail.com
              </span>
            </div>
          </div>

          <div className="flex items-center w-full gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-200">
            <UserPhoto
              src={ProfilePhoto1}
              size="h-10 w-10"
              className="relative"
            />
            <div className="flex flex-col">
              <span className="text-base font-semibold">Kai Rueda</span>
              <span className="text-sm text-gray-600">kairueda@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center w-full gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-200">
            <UserPhoto
              src={ProfilePhoto2}
              size="h-10 w-10"
              className="relative"
            />
            <div className="flex flex-col">
              <span className="text-base font-semibold">Gelyn Rueda</span>
              <span className="text-sm text-gray-600">
                gelynrueda@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full mt-auto">
          <button
            onClick={handleAddContact}
            className="inline-flex items-center justify-center w-full px-5 py-2 mt-4 text-black border border-black rounded-lg hover:bg-black hover:text-white"
          >
            <FiPlus className="mr-2 min-w-5 min-h-5" />
            <span>Add Family & Friends</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default RightPane;
