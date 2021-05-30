import { useSelector } from "react-redux";
import "./App.css";
import Design from "./Components/Design/Design";

import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div>
      <Home></Home>

      <Shop></Shop>
      <Design></Design>
    </div>
  );
}

export default App;
