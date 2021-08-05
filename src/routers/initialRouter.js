import React from "react";

import { Switch, Route } from "react-router-dom";

import NavBar from "../components/shared/navBar";
import HomeRouter from "./homeRouter.js";

function App() {
	return (
		<div className='app-container'>
			<div className='navbar'>
				<NavBar />
			</div>

			<div className='container'>
				<Switch>
					<Route path='/'>
						<HomeRouter />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
