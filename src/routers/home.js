import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/home/home";
import Projects from "../screens/projects/projects";
import Blogs from "../screens/blog/blog";

function HomeRouter() {
	return (
		<div>
			<Switch>
				<Route path={"/blogs"}>
					<Blogs />
				</Route>
				<Route path={"/projects"}>
					<Projects />
				</Route>
				<Route path={"/"}>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default HomeRouter;
