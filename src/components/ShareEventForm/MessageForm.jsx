import cn from "classnames";

import TextInput from "@components/Common/TextInput/TextInput";
import TextArea from "@components/Common/TextArea/TextArea";

const MessageForm = ({ errors, setTitle, setMessage, isVisible = false }) => {
  return (
    <div className={cn("space-y-2", !isVisible && "hidden")}>
      <label className="block text-sm font-medium text-gray-900">Title</label>
      <TextInput
        name="title"
        placeholder="Enter a title"
        onChange={e => setTitle(e.target.value)}
        error={errors?.title}
      />

      {/* Message Input */}
      <label className="block text-sm font-medium text-gray-900">Message</label>
      <TextArea
        name="message"
        placeholder="Write your message"
        onChange={e => setMessage(e.target.value)}
        rows={12}
      />
    </div>
  );
};

export default MessageForm;
