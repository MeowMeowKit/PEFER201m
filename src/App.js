import logo from "./logo.svg";
import "./App.css";
import HomeComponent from "./Component/HomeComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <HomeComponent />
         </div>
      </BrowserRouter>
   );
}

export default App;
