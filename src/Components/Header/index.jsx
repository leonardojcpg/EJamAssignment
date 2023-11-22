import "./styles.css";
import infoIconA from "./assets/infoIcon-a.svg";
import infoIconB from "./assets/infoIcon-b.svg";
import infoIconC from "./assets/infoIcon-c.svg";
import infoIconD from "./assets/infoIcon-d.svg";

export const Header = ({ infoTitleA, infoTitleB, infoTitleC, infoTitleD }) => {
  return (
    <div className="header-container">
      <div className="info-container">
        <img src={infoIconA} alt="" />
        <p>{infoTitleA}</p>
      </div>
      <div className="info-container">
        <img src={infoIconB} alt="" />
        <p>{infoTitleB}</p>
      </div>
      <div className="info-container">
        <img src={infoIconC} alt="" />
        <p>{infoTitleC}</p>
      </div>
      <div className="info-container">
        <img src={infoIconD} alt="" />
        <p>{infoTitleD}</p>
      </div>
    </div>
  );
};
