import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomeRouter from "./routers/home";
import Particles from "react-tsparticles";
import theme from "./constants/theme";

function App() {
	const particlesInit = (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<div className='appContainer'>
			<div
				style={{
					position: "relative",
					zIndex: 3,
					background: "transparent",
				}}
			>
				<Router>
					<HomeRouter />
				</Router>
			</div>
			<div style={{ position: "absolute", zIndex: 2 }}>
				<Particles
					id='tsparticles'
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						background: {
							color: {
								value: theme.background,
							},
						},
						fpsLimit: 120,
						particles: {
							color: { value: theme.card },
							move: {
								direction: "bottom",
								enable: true,
								outModes: "out",
								speed: 1,
							},
							number: {
								density: {
									enable: true,
									area: 800,
								},
								value: 300,
							},
							opacity: {
								value: 0.7,
							},
							shape: {
								type: "square",
							},
							size: {
								value: 10,
							},
							wobble: {
								enable: true,
								distance: 10,
								speed: 10,
							},
							zIndex: {
								value: { min: 0, max: 100 },
							},
						},
						detectRetina: true,
					}}
				/>
			</div>
		</div>
	);
}

export default App;
