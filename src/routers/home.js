import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "../screens/home/home";
import NavBar from "../components/NavBar";

function HomeRouter() {
	let { path } = useRouteMatch();

	return (
		<div>
			<Switch>
				<Route path={"/"}>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default HomeRouter;
