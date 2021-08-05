import React from "react";
import {
	Bars,
	Nav,
	NavMenu,
	NavLink,
	NavBtn,
	NavBtnLink,
} from "./NavBarElements";

const NavBar = () => {
	return (
		<>
			<Nav>
				<NavLink to='/'>
					<h1>Sam Schmitt</h1>
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
