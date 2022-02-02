import React from "react";
import ProjectCard from "../../ProjectCard/ProjectCard";
import QuaeLogo from "../../../assets/images/quaeLogo.png";
import { useHistory } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import projectsArray from "../../../data/projects";

export default function ProjectsSection(props) {
	const history = useHistory();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				padding: 10,
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					cursor: "pointer",
				}}
				onClick={() => {
					history.push("/projects");
				}}
			>
				<h1>Projects</h1>
				<p
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					See All
					<FiChevronRight />
				</p>
			</div>
			<ProjectCard
				link={projectsArray[0].link}
				linkName={projectsArray[0].linkName}
				title={projectsArray[0].title}
				description={projectsArray[0].description}
				image={projectsArray[0].image}
				tools={projectsArray[0].tools}
			/>
		</div>
	);
}
