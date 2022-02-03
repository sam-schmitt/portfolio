import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomeRouter from "./routers/home";
function App() {
	return (
		<div className='appContainer'>
			<Router>
				<HomeRouter />
			</Router>
		</div>
	);
}

export default App;
