import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = ({user, setUser}) => {
function handleLogoutClick() {
	fetch("/logout", { method: "DELETE" }).then((r) => {
	  if (r.ok) {setUser(null)
	  }
	});
  }

 const [collapsed, setCollapsed] = useState(true);
 
 const toggleNavbar = () => setCollapsed(!collapsed);
	return (
	  <div className="nav-content">
	  <div className="logo">
	  <NavbarBrand className ="brand" style={{textDecoration: "none", fontWeight: "700px", fontSize: "50px", color: "black"}} href="/">
	  Bride<span>zilla</span>
     <p>every bride's dream app</p>
	 </NavbarBrand> 
	 </div>
	  <Navbar className="nav-bar" color="faded" light>
       <NavbarBrand href="/" className="nav-brand">MENU</NavbarBrand>
       <NavbarToggler onClick={toggleNavbar} className="mr-2" />
       <Collapse isOpen={!collapsed} navbar>
         <Nav navbar>
           <NavItem className="nav-item">
             <NavLink href="/userchecklists">Checklists</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="/blogs">Blogs</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="/notes">Notes</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="/suggestion">Bridezilla's suggestion</NavLink>
           </NavItem>
           <NavItem>
             {/* {profiles.length >0 ? <NavLink style={{color: "#9D7E68", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} href="/myprofile"> My Profile</NavLink> : <NavLink style={{color: "#9D7E68", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}} href="/profile">Create Profile</NavLink>} */}
           </NavItem>
           <NavItem>
             <button className="button" onClick={handleLogoutClick}>Log Out</button>
           </NavItem>
         </Nav>
       </Collapse>
     </Navbar>
	  </div>
	)
}
export default NavBar;
