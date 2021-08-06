import React from "react";

const ContactCard = ({ icon, link }) => {
	return (
		<>
			<a href={link} rel='noreferrer' target='_blank'>
				<img
					src={icon}
					alt={""}
					style={{ maxWidth: 20, justifySelf: "center" }}
				/>
			</a>
		</>
	);
};
export default ContactCard;
