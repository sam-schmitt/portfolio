import React from "react";
import "./name.css";

const Name = () => {
	return (
		<div
			style={{
				display: "flex",
				padding: 10,
				justifyContent: "space-between",
				maxWidth: "50%",
				alignSelf: "center",
			}}
		>
			<p className='name'>Samuel Schmitt</p>
		</div>
	);
};

export default Name;
