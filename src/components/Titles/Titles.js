import React from "react";
import "./titles.css";

const Titles = () => {
	return (
		<div
			style={{
				display: "flex",
				padding: 10,
				justifyContent: "center",
				alignSelf: "center",
			}}
		>
			<p className='title'>Software</p>
			<p className='title'>Web 3.0</p>
			<p className='title'>Politics</p>
		</div>
	);
};

export default Titles;
