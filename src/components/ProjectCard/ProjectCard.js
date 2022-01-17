import React from "react";
import styles from "./projectCard.module.css";

const ProjectCard = ({ title, link, linkName, description, image, tools }) => {
	return (
		<div className={styles.cardContainer}>
			<h1 style={{ fontSize: 25 }}>{title}</h1>

			<img src={image} alt={""} className={styles.imageContainer} />
			<br />
			<p>{description}</p>
			<br />
			<a href={link} rel='noreferrer' target='_blank' style={{ color: "#fff" }}>
				{linkName}
			</a>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{tools.map(function (item, index) {
					return (
						<div
							style={{
								backgroundColor: "#738cff",
								padding: "4px 6px",
								margin: 2,
								borderRadius: 5,
							}}
						>
							<p>{item}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectCard;
