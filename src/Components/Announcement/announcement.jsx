import "./styles.css";
import { LeftSideAnnouncement } from "./LeftSideAnnouncement";
import { RightSideAnnouncement } from "./RightSideAnnouncement";
import { useMediaQuery } from "react-responsive";

export const Announcement = ({ showLeftSide }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isMobile ? (
        <div className="centered-container">
          <RightSideAnnouncement
            dontWantMessage="no thanks, i don't want this."
            warrantyMessage="If you are not completely thrilled with your Clarifion - We have a 30
              day satisfaction guarantee. Please refer to our return policy at the
              bottom of the page for more details. Happy Shopping!"
          />
        </div>
      ) : (
        <div className="announcements-container">
          <div className="left-container">
            {showLeftSide && <LeftSideAnnouncement />}
          </div>
          <div className="right-container">
            <RightSideAnnouncement dontWantMessage="no thanks, i don't want this." />
          </div>
        </div>
      )}
    </>
  );
};
