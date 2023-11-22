import { Header } from "./Components/Header/index.jsx";
import { PageTitle } from "./Components/PageTitle/index.jsx";
import { SecondaryHeader } from "./Components/SecondaryHeader/index.jsx";
import "./globals.css";

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
    </>
  );
}

export default App;
