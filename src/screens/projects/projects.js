import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import QuaeLogo from "../../assets/images/quaeLogo.png";
import SubHeader from "../../components/shared/subheader/subheader";
import SubFooter from "../../components/shared/subfooter/subfooter";
import projectsArray from "../../data/projects";

export default function Projects(props) {
	return (
		<>
			<SubHeader />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					padding: 10,
					alignItems: "center",
				}}
			>
				<h1 style={{ alignSelf: "center" }}>Projects</h1>
				<div>
					{projectsArray.map(function (d, idx) {
						return (
							<div key={idx} className='noBullet'>
								<ProjectCard
									link={d.link}
									linkName={d.linkName}
									title={d.title}
									description={d.description}
									image={d.image}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<SubFooter />
		</>
	);
}
