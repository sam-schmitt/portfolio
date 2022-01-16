import QuaeLogo from "../assets/images/quaeLogo.png";
import COTMW from "../assets/images/cotmw.png";
import WorkItOut from "../assets/images/logo.png";

const projectsArray = [
	{
		link: "https://quae.app",
		linkName: "quae.app",
		title: "Quae",
		description:
			"The first community driven voting platform. Exclusive to the city of Hoboken, NJ. Currently available on the App Store, and PlayStore",
		image: QuaeLogo,
	},
	{
		link: "https://workitout.one/",
		linkName: "workitout.one",
		title: "Work It Out",
		description:
			"Track your reps, sets, and exercises in one easy to use web application. Generate routines and workout plans that you can share with your friends.",
		image: WorkItOut,
	},
	{
		link: "https://citizensofthemilkyway.com",
		linkName: "citizensofthemilkyway.com",
		title: "Citizens of the Milky Way",
		description:
			"A first of its kind NFT Collection where each NFT character tells a part of a grand story.",
		image: COTMW,
	},

	{
		link: null,
		linkName: null,
		title: "SLSA",
		description:
			"A Blockchain Based Student Lottery Service (under development)",
		image: null,
	},
];

export default projectsArray;
