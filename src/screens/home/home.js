import React, { useEffect, useState } from "react";
import Contacts from "../../components/Contacts/Contacts.js";
import BlogsSection from "../../components/homeSections/blogs/blogs.js";
import NFTsSection from "../../components/homeSections/nfts/nfts.js";
import ProjectsSection from "../../components/homeSections/projects/projects.js";
import Name from "../../components/Name/Name.js";
import Logo from "../../components/NavBar/NavBar.js";
import Titles from "../../components/Titles/Titles.js";
import styles from "./home.module.css";

export default function Home() {
	const [state, setState] = useState({ mobileView: false });
	const { mobileView } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());

		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, []);
	return (
		<div className={styles.homeContainer}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					...(mobileView && {
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}),
				}}
			>
				<Titles />
				<Contacts />
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					...(mobileView && {
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}),
				}}
			>
				<Name mobileView={mobileView} />
				<Logo mobileView={mobileView} />
			</div>
			<div
				style={{
					display: "flex",
					...(mobileView && {
						flexDirection: "column",
					}),
					justifyContent: "center",
				}}
			>
				<BlogsSection />
				<ProjectsSection />
			</div>
		</div>
	);
}
