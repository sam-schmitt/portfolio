import React from "react";

import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar/index.js";
import BlogRouter from "./blog.js";
import ContactRouter from "./contact.js";
import HomeRouter from "./home.js";
import ProjectsRouter from "./projects.js";

function App() {
	return (
		<div className='app-container'>
			<div className='navbar'>
				<NavBar />
			</div>

			<div className='container'>
				<Switch>
					<Route path='/blog'>
						<BlogRouter />
					</Route>
					<Route path='/contact'>
						<ContactRouter />
					</Route>
					<Route path='/projects'>
						<ProjectsRouter />
					</Route>
					<Route path='/'>
						<HomeRouter />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
