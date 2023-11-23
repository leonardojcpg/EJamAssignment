import "./globals.css";
import { Header } from "./Components/Header/index.jsx";
import { SecondaryHeader } from "./Components/SecondaryHeader/index.jsx";
import { PageTitle } from "./Components/PageTitle/index.jsx";
import { PurchaseConfirmationSteps } from "./Components/PurchaseConfirmationSteps/index.jsx";
import { LeftSideAnnouncement } from "./Components/Announcement/LeftSideAnnouncement/index.jsx";

function App() {
  return (
    <>
      <Header
        infoTitleA="30-day satisfaction guarantee"
        infoTitleB="free delivery on orders over $40.00"
        infoTitleC="50.000+ happy costumers"
        infoTitleD="100% money back guarantee"
      />
      <SecondaryHeader />
      <PageTitle
        title="Wait ! Your Order In Progress"
        subtitle="Lorem Ipsum Dolor Sit Amet, Consectetur Adipicsing"
      />
      <PurchaseConfirmationSteps 
        step1="Step 1 : Cart Review" 
        step2="Step 2 : Checkout"
        step3="Step 3 : Special Offer"
        step4="Step 4 : Confirmation"
        />
        <LeftSideAnnouncement />
    </>
  );
}

export default App;
