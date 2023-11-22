import "./styles.css";
import greenCircle from "./assets/greenCircle.svg";
import blueCircle from "./assets/blueCircle.svg";
import noColorCircle from "./assets/noColorCircle.svg";

export const PurchaseConfirmationSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="step-container">
      <div className="step">
        <div className="greenCircle">
          <img src={greenCircle} alt="" />
        </div>
        <div className="stepTitle">
          <span>{step1}</span>
        </div>
      </div>

      <div className="step">
        <div className="greenCircle">
          <img src={greenCircle} alt="" />
        </div>
        <div className="stepTitle">
          <span>{step2}</span>
        </div>
      </div>

      <div className="step">
        <div className="greenCircle">
          <img src={blueCircle} alt="" />
        </div>
        <div className="stepTitle">
          <span>{step3}</span>
        </div>
      </div>

      <div className="step">
        <div className="greenCircle">
          <img src={noColorCircle} alt="" />
        </div>
        <div className="stepTitle">
          <span>{step4}</span>
        </div>
      </div>
    </div>
  );
};
