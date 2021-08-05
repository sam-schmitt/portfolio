import React, { useState, useEffect } from "react";
import "./styles/styles.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Provider } from "./providers/Provider";
import InitialRouter from "./routers/initialRouter";
function App() {
	const [darkTheme, setDarkTheme] = useState(false);
	const [screenSize, setScreenSize] = useState("laptop");

	const isMobileDevice = useMediaQuery({
		query: "(min-device-width: 480px)",
	});
	const isTabletDevice = useMediaQuery({
		query: "(min-device-width: 768px)",
	});
	const isLaptop = useMediaQuery({
		query: "(min-device-width: 1024px)",
	});
	const isDesktop = useMediaQuery({
		query: "(min-device-width: 1200px)",
	});
	const isBigScreen = useMediaQuery({
		query: "(min-device-width: 1201px)",
	});
	useEffect(() => {
		if (isMobileDevice) {
			setScreenSize("mobile");
			console.log("mobile");
		}
		if (isTabletDevice) {
			setScreenSize("tablet");
			console.log("tablet");
		}
		if (isLaptop) {
			setScreenSize("laptop");
			console.log("laptop");
		}
		if (isDesktop) {
			setScreenSize("desktop");
			console.log("desktop");
		}
		if (isBigScreen) {
			setScreenSize("bigScreen");
			console.log("bigScreen");
		}
	}, [isMobileDevice, isTabletDevice, isLaptop, isDesktop, isBigScreen]);
	return (
		<div className={`${screenSize}`}>
			<div
				className={"theme " + (darkTheme ? "theme--dark" : "theme--default")}
			>
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
