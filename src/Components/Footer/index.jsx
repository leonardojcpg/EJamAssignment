import "./styles.css";
import whiteLock from "./assets/whiteLock.svg";
import line from "./assets/line.svg";

export const Footer = ({ copywright, email, secure }) => {
  return (
    <div className="footer-container">
      <div className="copyright-container">
        <div className="copyright">
          <span>{copywright}</span>
        </div>
        <img src={line} alt="" />
        <div className="email">
          <span>{email}</span>
        </div>
      </div>
      <div className="secure-container">
        <img src={whiteLock} alt="" />
        <span>{secure}</span>
      </div>
    </div>
  );
};
