import "./styles.css";
import line from "./assets/line.svg";
import lock from "./assets/lock.svg";
import cards from "./assets/cards.svg";
import line2 from "./assets/Line3.svg";

export const PurchaseInfoResponsive = ({ purchaseInfoA, purchaseInfoB }) => {
  return (
    <>
      <div className="purchase-info-responsive">
        <div className="up-side">
          <span>{purchaseInfoA}</span>
          <div className="line-2">
            <img src={line} alt="" />
          </div>
          <div className="lock-2">
            <img src={lock} alt="" />
          </div>
          <div>
            <span>{purchaseInfoB}</span>
          </div>
        </div>
        <div className="line-3">
          <img src={line2} alt="" />
        </div>
        <div className="down-side">
            <img src={cards} alt="" />
        </div>
      </div>
    </>
  );
};
