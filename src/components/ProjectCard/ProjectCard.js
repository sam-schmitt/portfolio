import React from "react";
import "./projectCard.css";

const ProjectCard = ({ title, link, linkName, description, image }) => {
	return (
		<div className='card-container'>
			<h1 style={{ fontSize: 25 }}>{title}</h1>

			<img src={image} alt={""} className='image-container' />
			<br />
			<p>{description}</p>
			<br />
			<a href={link} rel='noreferrer' target='_blank'>
				{linkName}
			</a>
		</div>
	);
};

export default ProjectCard;
