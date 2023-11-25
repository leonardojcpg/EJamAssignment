import arrow from "./assets/arrow.svg";
import "./styles.css";

export const Button = ({ buttonText }) => {
  return (
    <div className="button-price-announcement">
      <button>
        <span>{buttonText}</span>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
};
