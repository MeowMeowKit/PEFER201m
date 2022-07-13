import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BATH_SHOWER } from "../share/bath_shower";
import { BEDDING } from "../share/bedding";
import { LIGHTING } from "../share/lighting";
import DetailComponent from "./DetailComponent";

// const mapStateToProps = (state) => {
//    return {
//       bath_shower: state.BATH_SHOWER,
//       bedding: state.BEDDING,
//       lighting: state.LIGHTING,
//    };
// };
const MainComponent = () => {
   let location = useLocation();
   const [data, setData] = useState([]);

   const [bathShower, setBathShower] = useState(BATH_SHOWER);
   const [bedding, setBedding] = useState(BEDDING);
   const [lighting, setLighting] = useState(LIGHTING);

   useEffect(() => {
      if (location.pathname === "/badshower") {
         setData(BATH_SHOWER);
      } else if (location.pathname === "/lighting") {
         setData(LIGHTING);
      } else if (location.pathname === "/bedding") {
         setData(BEDDING);
      } else if (location.pathname === "/home") {
         setData([]);
      } else {
         return;
      }
   }, [data, location.pathname]);
   return (
      <div>
         <div className="container">
            <div className="d-flex flex-md-row flex-column justify-content-center p-5 text-center">
               {data && data.length > 0 ? (
                  data.map((data, index) => {
                     return <DetailComponent key={index} component={data} />;
                  })
               ) : (
                  <div className="row">
                     <DetailComponent component={bathShower[0]} />
                     <DetailComponent component={bedding[0]} />
                     <DetailComponent component={lighting[0]} />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default MainComponent;
