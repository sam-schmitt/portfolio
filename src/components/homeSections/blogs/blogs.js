import React from "react";
import { useHistory } from "react-router-dom";
import { FiChevronRight, FiChevronsDown } from "react-icons/fi";

export default function BlogsSection() {
	const history = useHistory();

	return (
		<div
			style={{
				padding: 10,
				display: "flex",
				flexDirection: "column",
				width: "100%",
				maxWidth: 1000,
				justifyContent: "flex-start",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
					cursor: "pointer",
				}}
				onClick={() => {
					history.push("/blogs");
				}}
			>
				<h1
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					Blog
					<FiChevronRight />
				</h1>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<h1
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					Projects
					<FiChevronsDown />
				</h1>
			</div>
		</div>
	);
}
