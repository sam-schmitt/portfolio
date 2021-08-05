import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "../screens/home/home";
import Blog from "../screens/blog/blog";
import NavBar from "../components/NavBar";

function BlogRouter() {
	let { path } = useRouteMatch();

	return (
		<div>
			<Switch>
				<Route path={"/"}>
					<Blog />
				</Route>
			</Switch>
		</div>
	);
}

export default BlogRouter;
