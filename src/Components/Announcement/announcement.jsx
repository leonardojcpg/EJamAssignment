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
        <RightSideAnnouncement 
        ratingProductTitle="Clarifion Air Ionizer"
        ratingProductDescription="Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple."
        />
      </div>
    </div>
  );
};