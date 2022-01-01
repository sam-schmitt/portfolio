import React from "react";
import styles from "./name.module.css";

const Name = ({ mobileView }) => {
	return (
		<div className={styles.nameContainer}>
			<p
				className={styles.name}
				style={{ ...(mobileView && { textAlign: "center" }) }}
			>
				Samuel Schmitt
			</p>
			<p
				className={styles.sub}
				style={{ ...(mobileView && { textAlign: "center" }) }}
			>
				Blockchain Web Developer
			</p>
		</div>
	);
};

export default Name;
