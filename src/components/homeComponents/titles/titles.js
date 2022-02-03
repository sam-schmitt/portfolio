import React from "react";
import styles from "./titles.module.css";

const Titles = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				padding: 10,
				justifyContent: "center",
				alignSelf: "center",
			}}
		>
			<p className={styles.title}>Web 3.0</p>
			<p className={styles.title}>Blockchain</p>
			<p className={styles.title}>Politics</p>

			<p className={styles.title}>Web Development</p>
		</div>
	);
};

export default Titles;
