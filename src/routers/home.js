import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/home/home";
import Blogs from "../screens/blog/blog";

function HomeRouter() {
	return (
		<Switch>
			<Route path={"/blogs"}>
				<Blogs />
			</Route>
			<Route path={"/"}>
				<Home />
			</Route>
		</Switch>
	);
}

export default HomeRouter;
