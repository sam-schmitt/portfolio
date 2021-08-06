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
		<div
			style={{
				display: "flex",
				padding: 10,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img className='photo' src={logo} alt={"logo"}></img>
		</div>
	);
};

export default NavBar;
