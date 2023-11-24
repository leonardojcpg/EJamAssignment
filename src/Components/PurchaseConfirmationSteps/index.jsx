import "./styles.css";
import greenCircle from "./assets/greenCircle.svg";
import blueCircle from "./assets/blueCircle.svg";
import noColorCircle from "./assets/noColorCircle.svg";

export const PurchaseConfirmationSteps = ({ step1, step2, step3, step4, isMobile }) => {
  return (
    <div className="step-container">
      <div className="step">
        <div className="greenCircle">
          <img src={greenCircle} alt="" />
        </div>
        <div className="stepTitle">
          <span>{isMobile ? step1 : `Step 1: ${step1}`}</span>
        </div>
      </div>
      
      <div className="step">
        <div className="greenCircle">
          <img src={greenCircle} alt="" />
        </div>
        <div className="stepTitle">
          <span>{isMobile ? step2 : `Step 2: ${step2}`}</span>
        </div>
      </div>

      <div className="step">
        <div className="greenCircle">
          <img src={blueCircle} alt="" />
        </div>
        <div className="stepTitle">
          <span>{isMobile ? step3 : `Step 3: ${step3}`}</span>
        </div>
      </div>

      <div className="step">
        <div className="greenCircle">
          <img src={noColorCircle} alt="" />
        </div>
        <div className="stepTitle">
          <span>{isMobile ? step4 : `Step 4: ${step4}`}</span>
        </div>
      </div>
    </div>
  );
};
