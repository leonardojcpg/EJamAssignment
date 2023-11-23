import "./styles.css"
import { LeftSideAnnouncement } from "./LeftSideAnnouncement";
import { RightSideAnnouncement } from "./RightSideAnnouncement";

export const Announcement = () => {
  return (
    <div className="announcements-container">
      <div className="left-container">
        <LeftSideAnnouncement />
      </div>
      <div className="right-container">
        <RightSideAnnouncement />
      </div>
    </div>
  );
};