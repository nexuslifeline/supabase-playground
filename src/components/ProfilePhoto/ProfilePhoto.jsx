import cn from "classnames";

import Avatar from "@components/Avatar/Avatar";
import { useSession } from "@store/session";

const ProfilePhoto = ({ className, size = "12", ...props }) => {
  const { getUserInitials } = useSession();

  return (
    <Avatar
      initials={getUserInitials()}
      className={cn(`h-${size} w-${size}`, className)}
      {...props}
    />
  );
};

export default ProfilePhoto;
