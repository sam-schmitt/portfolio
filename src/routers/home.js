import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/home/home";

function HomeRouter() {
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
