import "./styles.css";
import guarantee from "./assets/guarantee.svg";
import { Button } from "../../Button";
import { AdDetails } from "../../AdDetails";
import { PurchaseInfo } from "../../PurchaseInfo";
import { useMediaQuery } from "react-responsive";
import { PurchaseInfoResponsive } from "../../PurchaseInfoResponsive";

export const RightSideAnnouncement = ({ dontWantMessage }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="right-announcement-container">
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
      <div className="dont-want-message">
        <a href="/">
          <span>{dontWantMessage}</span>
        </a>
      </div>
      <div className="warranty-message">
        <div className="guarantee">
          <img src={guarantee} alt="" />
        </div>
        <span>
          If you are not completely thrilled with your Clarifion - We have a{" "}
          <strong>30 day satisfaction guarantee.</strong> Please refer to our
          return policy at the bottom of the page for more details. Happy
          Shopping!
        </span>
      </div>
    </div>
  );
};
