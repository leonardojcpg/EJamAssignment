import "./styles.css";
import line from "./assets/line.svg";
import lock from "./assets/lock.svg";
import cards from "./assets/cards.svg";

export const PurchaseInfo = ({ purchaseInfoA, purchaseInfoB }) => {
  return (
    <>
      <div className="purchaseInfo">
        <span>{purchaseInfoA}</span>
        <div className="line">
          <img src={line} alt="" />
        </div>
        <img src={lock} alt="" />
        <span id="secure">{purchaseInfoB}</span>
        <div className="line">
          <img src={line} alt="" />
        </div>
        <div id="cards">
          <img src={cards} alt="" />
        </div>
      </div>
    </>
  );
};
