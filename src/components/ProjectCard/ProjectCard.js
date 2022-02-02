import React from "react";
import styles from "./projectCard.module.css";

const ProjectCard = ({
	title,
	link,
	linkName,
	description,
	image,
	tools,
	sections,
	mobileView,
}) => {
	return (
		<div className={styles.cardContainer}>
			<a href={link} rel='noreferrer' target='_blank' style={{ color: "#fff" }}>
				<h1 style={{ fontSize: 25 }}>{title}</h1>
			</a>
			<br />

			<div
				style={{
					display: "flex",
					...(mobileView && { flexDirection: "column" }),
				}}
			>
				<img src={image} alt={""} className={styles.imageContainer} />
				{description && (
					<div className={styles.sectionsContainer}>
						{" "}
						<p>{description}</p>
					</div>
				)}
				{sections && (
					<div className={styles.sectionsContainer}>
						{sections.description && (
							<div className={styles.section}>
								<p className={styles.sectionText}>{sections.description}</p>
							</div>
						)}
						{sections.problem && (
							<div className={styles.section}>
								<h3 className={styles.sectionHeader}>The Problem</h3>
								<p className={styles.sectionText}>{sections.problem}</p>
							</div>
						)}
						{sections.solution && (
							<div className={styles.section}>
								<h3 className={styles.sectionHeader}>The Solution</h3>
								<p className={styles.sectionText}>{sections.solution}</p>
							</div>
						)}
						{sections.product && (
							<div className={styles.section}>
								<h3 className={styles.sectionHeader}>The Product</h3>
								<p className={styles.sectionText}>{sections.product}</p>
							</div>
						)}
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
				)}
				<br />
			</div>
		</div>
	);
};

export default ProjectCard;
