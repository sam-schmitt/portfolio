import React from "react";
import {
	Bars,
	Nav,
	NavMenu,
	NavLink,
	NavBtn,
	NavBtnLink,
} from "./NavBarElements";
import logo from "../../assets/images/icon.png";

const NavBar = () => {
	return (
		<>
			<Nav>
				<NavLink to='/'>
					<img className='photo' src={logo} alt={"logo"}></img>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to='/blog' activeStyle>
						Blog
					</NavLink>
					<NavLink to='/contact' activeStyle>
						Contact
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/projects'>Projects</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default NavBar;
