import React, { useEffect, useState } from "react";

import logo from "../../assets/images/icon.png";

const NavBar = ({ mobileView }) => {
	const imageSize = 500;

	return (
		<div
			style={{
				display: "flex",
				padding: 10,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img
				style={{
					...(!mobileView && {
						height: imageSize,
						width: imageSize,
					}),
					...(mobileView && {
						height: 200,
						width: 200,
					}),
					padding: 20,
				}}
				className='photo'
				src={logo}
				alt={"logo"}
			/>
		</div>
	);
};

export default NavBar;
