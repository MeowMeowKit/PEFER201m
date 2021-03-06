import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";

const HeaderComponent = () => {
   const handleClick = () => {
      alert("You clicked the navbar!");
   };
   return (
      <div>
         <Navbar dark expand="md">
            <div className="container">
               <NavbarBrand className="mr-auto" href="/">
                  <Link to={"/home"}>
                     <img src="images/logo.png" height="50" alt="logo" />
                  </Link>
               </NavbarBrand>
               <NavbarBrand className="ml-auto" href="/">
                  <img
                     src="images/shoppingcart.jfif"
                     height="50"
                     alt="logo"
                     onClick={() => handleClick()}
                  />
               </NavbarBrand>
            </div>
         </Navbar>
      </div>
   );
};

export default HeaderComponent;
