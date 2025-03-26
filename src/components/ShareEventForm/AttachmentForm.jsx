import cn from "classnames";

const AttachmentForm = ({ isVisible = false }) => {
  return (
    <div className={cn("space-y-2", !isVisible && "hidden")}>attachment</div>
  );
};

export default AttachmentForm;
