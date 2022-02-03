import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsArray from "../../data/projects";
import styles from "./styles.module.css";

export default function Projects({ mobileView }) {
	return (
		<div className={styles.container}>
			{projectsArray.map(function (d, idx) {
				return (
					<div className={styles.card}>
						<ProjectCard
							link={d.link}
							linkName={d.linkName}
							title={d.title}
							description={d.description}
							image={d.image}
							tools={d.tools}
							sections={d.sections}
							mobileView={mobileView}
						/>
					</div>
				);
			})}
		</div>
	);
}
