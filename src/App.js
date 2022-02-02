import React from "react";
// import "./styles/styles.scss";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./providers/Provider";
import HomeRouter from "./routers/home";
function App() {
	return (
		<div className='appContainer'>
			<Router>
				<Provider>
					<HomeRouter />
				</Provider>
			</Router>
		</div>
	);
}

export default App;
