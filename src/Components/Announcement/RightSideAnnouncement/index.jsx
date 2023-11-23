import "./styles.css";

export const RightSideAnnouncement = () => {
  return (
    <div className="rightAnnouncement-container">
      <div className="titleAnnouncement">
        <span id="blueText">
          ONE TIME ONLY
          <span> Special Price for 6 extra clarifion for only $14 Each ($84.00Total!)
          </span>
        </span>
      </div>
      <div className="priceAnnouncement">
        <div className="img-priceAnnouncement"></div>
        <div className="rating-priceAnnoucement"></div>
      </div>
      <div className="description-priceAnnouncement"></div>
      <div className="descount"></div>
      <div className="button-priceAnnouncement"></div>
      <div className="purchaseInfo"></div>
      <div className="dontWantMessage"></div>
      <div className="warrantyMessage"></div>
    </div>
  );
};
