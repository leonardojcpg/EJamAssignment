import "./styles.css";
import guarantee from "./assets/guarantee.svg";
import { Button } from "../../Button";
import { AdDetails } from "../../AdDetails";
import { PurchaseInfo } from "../../PurchaseInfo";
import { useMediaQuery } from "react-responsive";
import { PurchaseInfoResponsive } from "../../PurchaseInfoResponsive";

export const RightSideAnnouncement = ({ dontWantMessage, warrantyMessage }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="rightAnnouncement-container">
      <AdDetails
        ratingProductTitle="Clarifion Air Ionizer"
        ratingProductDescription="Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple."
      />
      <Button buttonText="Yes - Claim my discount" />
      {isMobile ? (
        <PurchaseInfoResponsive
          purchaseInfoA="Free shipping"
          purchaseInfoB="Secure 256-bit SSL encryption."
        />
      ) : (
        <PurchaseInfo
          purchaseInfoA="Free shipping"
          purchaseInfoB="Secure 256-bit SSL encryption."
        />
      )}
      <div className="dontWantMessage">
        <span>{dontWantMessage}</span>
      </div>
      <div className="warrantyMessage">
        <div className="guarantee">
          <img src={guarantee} alt="" />
        </div>
        <span>{warrantyMessage}</span>
      </div>
    </div>
  );
};
