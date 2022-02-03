import React, { useEffect, useState } from "react";
import Contacts from "../../components/Contacts/Contacts.js";
import BlogsSection from "../../components/homeSections/blogs/blogs.js";
import Name from "../../components/Name/Name.js";
import Logo from "../../components/NavBar/NavBar.js";
import Titles from "../../components/Titles/Titles.js";
import styles from "./home.module.css";
import FadeIn from "react-fade-in/lib/FadeIn";
import Projects from "../projects/projects.js";
import SubFooter from "../../components/shared/subfooter/subfooter.js";

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
			<FadeIn>
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
					<Projects mobileView={mobileView} />
				</div>
				<SubFooter />
			</FadeIn>
		</div>
	);
}
