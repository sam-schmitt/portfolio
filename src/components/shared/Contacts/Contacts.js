import React from "react";
import {
	FaTwitterSquare,
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedin,
	FaGithubSquare,
} from "react-icons/fa";

const Contacts = () => {
	const color = "#fff";
	//#0036af
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				padding: 10,
				justifyContent: "center",
			}}
		>
			<a
				href='https://twitter.com/samschmiitt'
				target='_blank'
				rel='noreferrer'
				color='#000'
			>
				<FaTwitterSquare size={50} color={color} />
			</a>
			<a
				href='https://www.facebook.com/SamSchmitt703'
				target='_blank'
				rel='noreferrer'
				color='#000'
			>
				<FaFacebookSquare size={50} color={color} />
			</a>
			<a
				href='https://www.instagram.com/sam.schmiitt/'
				target='_blank'
				rel='noreferrer'
				color='#000'
			>
				<FaInstagramSquare size={50} color={color} />
			</a>
			<a
				href='https://www.linkedin.com/in/samuel-schmitt-008805189/'
				target='_blank'
				rel='noreferrer'
				color='#000'
			>
				<FaLinkedin size={50} color={color} />
			</a>
			<a
				href='https://github.com/sam-schmitt'
				target='_blank'
				rel='noreferrer'
				color='#000'
			>
				<FaGithubSquare size={50} color={color} />
			</a>
		</div>
	);
};

export default Contacts;
