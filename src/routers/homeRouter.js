import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "../screens/home/home";
import Contact from "../screens/home/contact";

function HomeRouter() {
	let { path, url } = useRouteMatch();

	return (
		<div className='home-router'>
			<Switch>
				<Route path={`${path}/contact`}>
					<Contact />
				</Route>
				<Route path={"/"}>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default HomeRouter;
