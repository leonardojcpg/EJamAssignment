import "./globals.css";
import { Header } from "./Components/Header/index.jsx";
import { SecondaryHeader } from "./Components/SecondaryHeader/index.jsx";
import { PageTitle } from "./Components/PageTitle/index.jsx";
import { PurchaseConfirmationSteps } from "./Components/PurchaseConfirmationSteps/index.jsx";
import { Announcement } from "./Components/Announcement/announcement.jsx";
//import { Footer } from "./Components/Footer/index.jsx";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="app">
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
        step1="Cart Review"
        step2="Checkout"
        step3="Special Offer"
        step4="Confirmation"
        isMobile={isMobile}
      />
      <Announcement showLeftSide={!isMobile} />
{/*       <Footer
        copywright="Copywright (C) 2023"
        email="clarifionsupport@clarifion.com"
        secure="Secure 256-bit SSL encryption."
      /> */}
    </div>
  );
}

export default App;
