import React from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "../screens/blog/blog";

function BlogRouter() {
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
