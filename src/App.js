import "./globals.css";
import { Header } from "./Components/Header/index.jsx";
import { SecondaryHeader } from "./Components/SecondaryHeader/index.jsx";
import { PageTitle } from "./Components/PageTitle/index.jsx";
import { PurchaseConfirmationSteps } from "./Components/PurchaseConfirmationSteps/index.jsx";
import { Annoucement } from "./Components/Announcement/index.jsx";

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
        <Annoucement 
        profileName="Ken T." 
        verifiedStatusProfile="Verified Customer"
        comentText="“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”"
        />
    </>
  );
}

export default App;
