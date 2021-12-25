import React from "react";

import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import HomeRouter from "./home.js";

function App() {
	return (
		<div className='app-container'>
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
