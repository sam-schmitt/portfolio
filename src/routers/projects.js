import React from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "../screens/projects/projects.js";

function ProjectsRouter() {
	return (
		<div>
			<Switch>
				<Route path={"/"}>
					<Projects />
				</Route>
			</Switch>
		</div>
	);
}

export default ProjectsRouter;
