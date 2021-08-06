import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "../screens/contact/contact";

function ContactRouter() {
	return (
		<div>
			<Switch>
				<Route path={"/"}>
					<Contact />
				</Route>
			</Switch>
		</div>
	);
}

export default ContactRouter;
