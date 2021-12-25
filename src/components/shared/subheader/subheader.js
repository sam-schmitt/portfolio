import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../../assets/images/icon.png";

export default function SubHeader() {
	const history = useHistory();
	const imageSize = 50;
	return (
		<div
			onClick={() => {
				history.push("/");
			}}
			style={{
				display: "flex",
				padding: 10,
				alignItems: "center",
			}}
		>
			<img
				src={Logo}
				alt={""}
				style={{ height: imageSize, width: imageSize }}
			/>
			<h1 style={{ marginLeft: 10 }}>Sam Schmitt</h1>
		</div>
	);
}
