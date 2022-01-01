import React from "react";
import styles from "./projectCard.module.css";

const ProjectCard = ({ title, link, linkName, description, image }) => {
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
		</div>
	);
};

export default ProjectCard;
