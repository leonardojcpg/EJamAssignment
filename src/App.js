import { Header } from "./Components/Header/index.jsx";
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
    </>
  );
}

export default App;
