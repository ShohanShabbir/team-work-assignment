import { useSelector } from "react-redux";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Design from "./Components/Design/Design";

import Home from "./Components/Home/Home";
import Review from "./Components/Review/Review";
import Shipment from "./Components/Shipment/Shipment";
import Shop from "./Components/Shop/Shop";
import Team from "./Components/Team/Team";

function App() {
  return (
    <div>
      <Home></Home>
      <Shop></Shop>
      <Design></Design>
      <Shipment></Shipment>
      <Review></Review>
      <Team></Team>
      <Contact></Contact>
    </div>
  );
}

export default App;
