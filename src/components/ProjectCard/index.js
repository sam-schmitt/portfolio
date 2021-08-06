import React from "react";
import { Card, ProjectTitle, WebsiteLink } from "./ProjectCardElements";
import logo from "../../assets/images/icon.png";

const ProjectCard = ({ title, link, linkName, description, image }) => {
	return (
		<>
			<Card to={{ pathname: link }} target='_blank'>
				<ProjectTitle>{title}</ProjectTitle>

				<img
					src={image}
					alt={""}
					style={{
						maxWidth: "400px",
						justifySelf: "center",
						overflow: "hidden",
					}}
				/>
				<br />
				<p>{description}</p>
				<br />
				<WebsiteLink to={{ pathname: link }} target='_blank'>
					{linkName}
				</WebsiteLink>
			</Card>
		</>
	);
};

export default ProjectCard;
