import "./styles.css";
import clarifionLogo from "./assets/clarifionLogo.svg";
import mcAfeeSecure from "./assets/mcAfeeSecureLogo.svg";
import nortonLogo from "./assets/nortonLogo.svg";

export const SecondaryHeader = () => {
  return (
    <div className="secondaryHeader-container">
      <div className="clarifion-logo">
        <img src={clarifionLogo} width={192} height={36} alt="" />
      </div>
      <div className="antivirus-logo">
        <img src={mcAfeeSecure} alt="" />
        <img src={nortonLogo} alt="" />
      </div>
    </div>
  );
};
