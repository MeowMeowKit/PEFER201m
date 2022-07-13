import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardComponent from "./DashboardComponent";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";

const HomeComponent = () => {
   return (
      <div>
         <HeaderComponent />
         <DashboardComponent />
         <Routes>
            <Route path="/" element={<MainComponent />}>
               <Route path="/home" element={<MainComponent />}></Route>
               <Route path="/lighting" element={<MainComponent />}></Route>
               <Route path="/bedding" element={<MainComponent />}></Route>
               <Route path="/badshower" element={<MainComponent />}></Route>
               {/* <Redirect to="/home" /> */}
            </Route>
         </Routes>
      </div>
   );
};

export default HomeComponent;
