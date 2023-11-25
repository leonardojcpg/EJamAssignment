import "./styles.css"
import clarifionImg from "./assets/clarifionImg.svg"
import stars from "./assets/stars_2.svg"
import selectBlueIcon from "./assets/selectBlueIcon.svg"
import blueTick from "./assets/blueTick.svg"
import descountImg from "./assets/descountIcon.svg"

export const AdDetails = ({ ratingProductTitle, ratingProductDescription }) => {
  return (
    <>
      <div className="title-announcement">
        <p>
          <span>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For
          Only <span>$14 Each</span> ($84.00 Total!)
        </p>
      </div>
      <div className="price-announcement">
        <div className="img-price-announcement">
          <img src={clarifionImg} alt="" />
        </div>
        <div className="rating-price-annoucement">
          <div className="rating-price-annoucement-title">
            <span>{ratingProductTitle}</span>
            <p>$180</p>
            <h3>$84</h3>
          </div>
          <div className="rating">
            <img src={stars} alt="" />
          </div>
          <div className="rating-price-annoucement-leftinstock">
            <img src={selectBlueIcon} alt="" />
            <span>12 left in stock</span>
          </div>
          <div className="rating-price-annoucement-description">
            <span>{ratingProductDescription}</span>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="description-message">
          <img src={blueTick} alt="" />
          <span>
            Negative Ion Technology map help{" "}
            <strong>help with allergens.</strong>
          </span>
        </div>
        <div className="description-message">
          <img src={blueTick} alt="" />
          <span>
            Designed for <strong>air rejuvenation.</strong>
          </span>
        </div>

        <div className="description-message">
          <img src={blueTick} alt="" />
          <span>
            <strong>Perfect for every room</strong> in all types of places.
          </span>
        </div>
      </div>
      <div className="descount">
        <div className="descount-img">
          <img src={descountImg} alt="" />
        </div>
        <h4>
          Save <span>53% </span>and get <span>6 extra Clarifision</span> for only{" "}
          <span>$14 Each</span>.
        </h4>
      </div>
    </>
  );
};
