// screen where admins can change things about the group
import React from "react";

export default function Contact(props) {
	const linkStyle = {
		fontSize: 20,
		marginTop: 10,
	};
	return (
		<div
			style={{
				padding: 10,
				display: "flex",
				height: "90vh",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<h1>Contact</h1>
			<a
				style={linkStyle}
				href='https://www.linkedin.com/in/samuel-schmitt-008805189/'
				class='text-white'
				target='_blank'
				rel='noreferrer'
			>
				LinkedIn
			</a>
			<a
				style={linkStyle}
				href='https://www.instagram.com/sam.schmiitt/'
				class='text-white'
				target='_blank'
				rel='noreferrer'
			>
				Instagram
			</a>
			<a
				style={linkStyle}
				href='https://www.facebook.com/SamSchmitt703'
				class='text-white'
				target='_blank'
				rel='noreferrer'
			>
				Facebook
			</a>
			<a
				style={linkStyle}
				href='https://twitter.com/samschmiitt'
				class='text-white'
				target='_blank'
				rel='noreferrer'
			>
				Twitter
			</a>
		</div>
	);
}
