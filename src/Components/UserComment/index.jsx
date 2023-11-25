import "./styles.css";
import stars from "./assets/Stars.svg";
import verifyLogo from "./assets/verifyLogo.svg";
import profileImg from "./assets/profileImg.svg";

export const UserComment = ({
  profileName,
  verifiedStatusProfile,
  comentText,
}) => {
  return (
    <div className="left-coment-container">
      <div className="left-coment">
        <div className="title-coment">
          <div className="profile-img">
            <img src={profileImg} alt="" />
          </div>
          <div className="coment-stats">
            <div className="coment-rating">
              <img src={stars} alt="" />
            </div>
            <div className="profile-name">
              <span id="profile-name">{profileName}</span>
              <img src={verifyLogo} alt="" />
              <span>{verifiedStatusProfile}</span>
            </div>
          </div>
        </div>
        <div className="coment-text">
          <span>{comentText}</span>
        </div>
      </div>
    </div>
  );
};
