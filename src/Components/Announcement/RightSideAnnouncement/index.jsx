import "./styles.css";
import clarifionImg from "./assets/clarifionImg.svg";
import stars from "./assets/stars_2.svg";
import selectBlueIcon from "./assets/selectBlueIcon.svg";
import blueTick from "./assets/blueTick.svg";
import descountImg from "./assets/descountIcon.svg";
import arrow from "./assets/arrow.svg";
import cards from "./assets/cards.svg"
import line from "./assets/line.svg"
import lock from "./assets/lock.svg"
import guarantee from "./assets/guarantee.svg"


export const RightSideAnnouncement = ({
  ratingProductTitle,
  ratingProductDescription,
}) => {
  return (
    <div className="rightAnnouncement-container">
      <div className="titleAnnouncement">
        <p>
          <span>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For
          Only <span>$14 Each</span> ($84.00 Total!)
        </p>
      </div>
      <div className="priceAnnouncement">
        <div className="img-priceAnnouncement">
          <img src={clarifionImg} alt="" />
        </div>
        <div className="rating-priceAnnoucement">
          <div className="rating-priceAnnoucement-title">
            <span>{ratingProductTitle}</span>
            <p>$180</p>
            <h3>$84</h3>
          </div>
          <div className="rating">
            <img src={stars} alt="" />
          </div>
          <div className="rating-priceAnnoucement-leftInStock">
            <img src={selectBlueIcon} alt="" />
            <span>12 left in stock</span>
          </div>
          <div className="rating-priceAnnoucement-description">
            <span>{ratingProductDescription}</span>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="descriptionMessage">
          <img src={blueTick} alt="" />
          <span>
            Negative Ion Technology map help{" "}
            <strong>help with allergens.</strong>
          </span>
        </div>

        <div className="descriptionMessage">
          <img src={blueTick} alt="" />
          <span>
            Designed for <strong>air rejuvenation.</strong>
          </span>
        </div>

        <div className="descriptionMessage">
          <img src={blueTick} alt="" />
          <span>
            <strong>Perfect for every room</strong> in all types of places.
          </span>
        </div>
      </div>
      <div className="descount">
        <div className="descountImg">
          <img src={descountImg} alt="" />
        </div>
        <h4>
          Save <span>53%</span>and get <span>6 extra Clarifision</span> for only{" "}
          <span>$14 Each</span>.
        </h4>
      </div>
      <div className="button-priceAnnouncement">
        <button>
          <span>YES - CLAIM MY DISCOUNT</span>
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className="purchaseInfo">
      <span>Free Shipping</span>
        <div className="line">
          <img src={line} alt="" />
        </div>
        <img src={lock} alt="" />
        <span id="secure">Secure 256-bit SSL encryption.</span>
        <div className="line">
          <img src={line} alt="" />
        </div>
        <div id="cards">
          <img src={cards} alt="" />
        </div>
      </div>
      <div className="dontWantMessage">
        <span>no thanks, i don't want this.</span>
      </div>
      <div className="warrantyMessage">
        <div className="guarantee">
        <img src={guarantee} alt="" />
        </div>
        <span>If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</span>
      </div>
    </div>
  );
};
