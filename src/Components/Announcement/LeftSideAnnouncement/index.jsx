import "./styles.css";
import { ImgAnnouncement } from "../../ImgAnnouncement/index.jsx";
import { UserComment } from "../../UserComment/index.jsx";

export const LeftSideAnnouncement = () => {
  return (
    <div className="annoucement-container">
      <ImgAnnouncement />
      <UserComment 
        profileName="Ken T." 
        verifiedStatusProfile="Verified Customer"
        comentText="“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”"/>
    </div>
  );
};
