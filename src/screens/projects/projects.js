// screen where admins can change things about the group
import React from "react";
import ProjectCard from "../../components/ProjectCard";
import QuaeLogo from "../../assets/images/quaeLogo.png";

export default function Home(props) {
	return (
		<div
			style={{
				display: "flex",
				height: "90vh",
				flexDirection: "column",
				padding: 10,
			}}
		>
			<h1 style={{ alignSelf: "center" }}>Projects</h1>
			<div>
				<ProjectCard
					link={"https://quae.app"}
					linkName={"quae.app"}
					title='Quae'
					description='The first community driven voting platfrom. Exclusive to the city of Hoboken, NJ. Currently available on the App Store, and PlayStore'
					image={QuaeLogo}
				/>
			</div>
		</div>
	);
}
