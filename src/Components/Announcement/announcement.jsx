import "./styles.css";
import { LeftSideAnnouncement } from "./LeftSideAnnouncement";
import { RightSideAnnouncement } from "./RightSideAnnouncement";

export const Announcement = () => {
  return (
    <div className="announcements-container">
      <div className="left-container">
        <LeftSideAnnouncement />
      </div>
      <div className="right-container">
        <RightSideAnnouncement
          dontWantMessage="no thanks, i don't want this."
          warrantyMessage="If you are not completely thrilled with your Clarifion - We have a 30
        day satisfaction guarantee. Please refer to our return policy at the
        bottom of the page for more details. Happy Shopping!"
        />
      </div>
    </div>
  );
};
