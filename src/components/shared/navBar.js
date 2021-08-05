import React, { useState } from "react";
import * as MdIcon from "react-icons/md";
import { useHistory } from "react-router";
export default function NavBar() {
	const [title, setTitle] = useState("Home");
	const history = useHistory();
	return (
		<div className='flex-container-row-start admin-navbar-container'>
			<div>
				<h3 className='faded'>{title}</h3>
			</div>
			<div className='button-container'>
				<button
					className='button'
					onClick={() => {
						setTitle("Contact");
						history.push("/home/contact");
					}}
				>
					<MdIcon.MdSettings />
					<p className='nav-button'>Contact</p>
				</button>

				<button
					className='button'
					onClick={() => {
						setTitle("Home");
						history.push("/home");
					}}
				>
					<MdIcon.MdHome />

					<p className='nav-button'>Home</p>
				</button>
			</div>
		</div>
	);
}
