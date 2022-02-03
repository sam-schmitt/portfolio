import React from "react";
import Contacts from "../../shared/Contacts/Contacts";
import Titles from "../titles/titles";

const Header = ({ mobileView }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				...(mobileView && {
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}),
			}}
		>
			<Titles />
			<Contacts />
		</div>
	);
};

export default Header;
