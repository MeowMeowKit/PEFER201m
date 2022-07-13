import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem, Collapse, Navbar } from "reactstrap";
const DashboardComponent = () => {
   return (
      <div className="container">
         <Navbar expand="md">
            <Collapse isOpen={true} navbar>
               <Nav navbar>
                  <NavItem>
                     <p className="cate-title">CATEGORIES</p>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to="/lighting">
                        Lighting
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to="/bedding">
                        Bedding
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink className="nav-link" to="/badshower">
                        Bath &amp; Shower
                     </NavLink>
                  </NavItem>
               </Nav>
            </Collapse>
         </Navbar>
      </div>
   );
};

export default DashboardComponent;
