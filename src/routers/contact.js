import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "../screens/home/home";
import Contact from "../screens/contact/contact";
import NavBar from "../components/NavBar";

function ContactRouter() {
	let { path } = useRouteMatch();

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
