import React from "react";
// import "./styles/styles.scss";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./providers/Provider";
import InitialRouter from "./routers/initial";
function App() {
	return (
		<div>
			<div>
				<Router>
					<Provider>
						<InitialRouter />
					</Provider>
				</Router>
			</div>
		</div>
	);
}

export default App;
