import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsArray from "../../data/projects";

export default function Projects({ mobileView }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				maxWidth: 1000,
				padding: 10,
			}}
		>
			<h1 style={{ textAlign: "left" }}>Projects</h1>
			{projectsArray.map(function (d, idx) {
				return (
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
				);
			})}
		</div>
	);
}
