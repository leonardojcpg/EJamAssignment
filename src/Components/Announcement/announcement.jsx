import "./styles.css"
import { LeftSideAnnouncement } from "./LeftSideAnnouncement";
import { RightSideAnnouncement } from "./RightSideAnnouncement";

export const Announcement = () => {
    return (
      <div className="announcements-container">
        <LeftSideAnnouncement />
        <RightSideAnnouncement />
      </div>
    );
  };