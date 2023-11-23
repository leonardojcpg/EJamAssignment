import "./styles.css";
import imgAnnoucement from "./assets/imgAnnoucement.svg";
import stars from "./assets/Stars.svg";
import verifyLogo from "./assets/verifyLogo.svg";
import profileImg from "./assets/profileImg.svg";

export const Annoucement = ({
  profileName,
  verifiedStatusProfile,
  comentText,
}) => {
  return (
    <div className="annoucement-container">
      <div className="leftImgContent">
        <img src={imgAnnoucement} alt="" />
      </div>

      <div className="leftComent">
        <div className="titleComent">
          <div className="profileImg">
            <img src={profileImg} alt="" />
          </div>

          <div className="comentStats">
            <div className="comentRating">
              <img src={stars} alt="" />
            </div>

            <div className="profileName">
              <span id="profileName">{profileName}</span>
              <img src={verifyLogo} alt="" />
              <span>{verifiedStatusProfile}</span>
            </div>
          </div>
        </div>
        <div className="comentText">
          <span>{comentText}</span>
        </div>
      </div>
    </div>
  );
};
