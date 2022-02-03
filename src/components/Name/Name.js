import React from "react";
import TypewriterComponent from "typewriter-effect";
import theme from "../../constants/theme";
import styles from "./name.module.css";

const Name = ({ mobileView }) => {
	const list = [
		"Software",
		"Web",
		"Blockchain",
		"React.js",
		"Node.js",
		"OAuth",
		"React Native",
		"Express.js",
		"JavaScript",
		"Python",
		"C++",
		"Firebase",
		"Expo",
		"CSS",
		"JWT",
		"MongoDB",
		"Mongoose",
		"SQL",
		"Electron",
		"Next.js",
	];

	return (
		<div className={styles.nameContainer}>
			<p className={styles.name} style={{ textAlign: "center" }}>
				Samuel Schmitt
			</p>
			<p
				style={{
					backgroundColor: theme.card,
					borderRadius: 5,
					paddingRight: 4,
					paddingLeft: 4,
					paddingTop: 1,
					paddingBottom: 1,
					marginRight: 4,
					minWidth: 200,
					display: "flex",
					fontSize: 20,
				}}
			>
				<TypewriterComponent
					options={{
						strings: list,
						autoStart: true,
						loop: true,
						delay: 150,
					}}
				/>
			</p>
			<p
				className={styles.sub}
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					...(mobileView && { textAlign: "center" }),
				}}
			>
				Developer
			</p>
		</div>
	);
};

export default Name;
