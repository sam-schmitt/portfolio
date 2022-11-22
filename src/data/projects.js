import QuaeLogo from "../assets/images/quaeLogo.png";
import COTMW from "../assets/images/cotmw.png";
import SBLogo from "../assets/images/soundbites.png";
import Cabal from "../assets/images/cabal.png";
import CabalLabs from "../assets/images/caballabs.png";

import TapMe from "../assets/images/tapme.png";

import WorkItOut from "../assets/images/logo.png";
import SmileMore from "../assets/images/smile-more.png";

const projectsArray = [
	{
		link: "https://quae.app",
		linkName: "quae.app",
		title: "Quae",
		image: QuaeLogo,
		tools: [
			"JavaScript",
			"MongoDB",
			"Mongoose",
			"Express.js",
			"Node.js",
			"React.js",
			"Chakra-UI",
			"CSS",
			"JWT",
			"React Native",
			"Expo",
			"Firebase",
			"Next.js",
		],
		sections: {
			problem:
				"Voting in a professional manner is way too complicated and it stops people from being able to use their voice effectively in their lives.",
			solution:
				"We needed to make it possible for members of a large organization to find the right path to make a difference. We also needed to find ways for the community to work together to find each other's common interests.",
			product:
				"A full stack web and mobile application. The web application allows for administrators to easily post proposals that pass through the qualifying phases so that they may be made into law. Ordinary members may propose  ideas that can be voted on by everyone, allowing for a fully transparent suggestive process.",
		},
	},
	{
		link: "https://caballabs.com",
		linkName: "Site",
		title: "Cabal Labs",
		image: CabalLabs,
		tools: ["Web3", "Blockchain", "Product Management", "Research"],
		sections: {
			problem:
				"There are antiquated systems in this world that need modern technical solutions.",
			solution:
				"Our goal is to make a better world by improving the distribution, access, and management of resources in society.",
			product:
				"Liberatio per technologiam directly translates to “liberation through technology”. It means that we have the ability to use technology to free ourselves from oppressive situations and to improve our lives in ways we can’t yet even fathom.",
		},
	},
	{
		link: "https://party.samschmitt.net",
		linkName: "Temp Site",
		title: "Smile More",
		image: SmileMore,
		tools: [
			"React Native",
			"Expo",
			"MongoDB",
			"Mongoose",
			"AWS-S3",
			"Express",
			"Node",
			"Cron Jobs",
			"Figma",
			"Chakra-UI",
			"Next.js",
		],
		sections: {
			problem:
				"During a social event, groups of people can be having such a fun time that they end the night forgetting to take any photos, or people were just too nervous to ask to take a picture with everyone. Therefore, there are no documented memories of the fun time.",
			solution:
				"There needs to be an non-intrusive way to keep people reminded to take photos while also uplifting the vibe and energy of the event.",
			product:
				"A mobile application where hosts can organize their event and attendees and once the software is started, then groups of people will be randomly notified to take pictures with each other or to take pictures of themselves.",
		},
	},
	{
		link: "https://ethglobal.com/showcase/tap-contacts-s3ds7",
		linkName: "Temporary Site",
		title: "Tap Me",
		image: TapMe,
		tools: [
			"JavaScript",
			"React.js",
			"Next.js",
			"React Native",
			"Expo",
			"Chakra-UI",
			"CSS",
			"Solidity",
			"Remix",
			"Polygon",
			"WalletConnect",
			"Web3Auth",
			"WorldCoin",
			"IPFS",
		],
		sections: {
			problem:
				"Wallet addresses complicate transactions so that every time two people facilitate a transaction they always need to share their address and make sure they type it in correctly.",
			solution:
				"Utilize Web3 level security to provide users ownership over their contact list to remember who they've sent transactions to and utilize their own personal naming conventions.",
			product:
				"A mobile application where users are onboarded using their existing social accounts or import their previous wallets. From this app they can send transactions and add new contacts by sending links or QR codes.",
		},
	},
	{
		link: "https://ethglobal.com/showcase/cabal-jgj8g",
		linkName: "Temporary Site",
		title: "Cabal Protocol",
		image: Cabal,
		tools: [
			"JavaScript",
			"React.js",
			"Chakra-UI",
			"CSS",
			"Solidity",
			"Remix",
			"Polygon",
			"Vercel",
			"WalletConnect",
			"WorldCoin",
			"RainbowKit",
			"IPFS",
		],
		sections: {
			problem:
				"Users who are onboarded on an application are asked countless times to offer their data not knowing where it will be used or possible sold. Developers may lose potential users during this process.				",
			solution:
				"Utilize Web3 level security to authenticate new users without developers having to handle their data.",
			product:
				"A Web3 connection provider that standardizes data collection so that all users can prevent a company from having total control over their data.",
		},
	},
	{
		link: "https://workitout.one/",
		linkName: "workitout.one",
		title: "Work It Out",
		image: WorkItOut,
		tools: [
			"JavaScript",
			"OAuth",
			"MongoDB",
			"Mongoose",
			"Express.js",
			"Node.js",
			"React.js",
			"Chakra-UI",
			"CSS",
			"JWT",
		],
		sections: {
			problem:
				"It's very difficult for experienced individuals to track their weight, sets, and reps on a free, easy-to-use application. Whenever friends ask each other about their routine, they may have to spend several minutes, and possibly hours to explain each step.",
			solution:
				"One, free, easy-to-use application that allows users to both track and share their workout routines with others.",
			product:
				"A full stack web application that uses extremely dynamic editing of a workout routine that can be shared and used by others, and even built upon.",
		},
	},
	{
		link: "https://github.com/sam-schmitt/soundbites",
		linkName: "GitHub",
		title: "SoundBites",
		image: SBLogo,
		tools: ["JavaScript", "React.js", "Material-UI", "CSS", "Electron"],
		sections: {
			problem:
				"Those who wish to livestream content, are faced with expensive soundbite managing equipment or software, when all they might need is a light application that will use local audio files on their device.",
			solution:
				"One, free, easy-to-use desktop application that allows users to play soundbites to their livestream at zero cost.",
			product:
				"A light desktop application where users can choose a local path that houses their audio files, to be easily searched and played in seconds.",
		},
	},
	{
		link: "https://citizensofthemilkyway.com",
		linkName: "citizensofthemilkyway.com",
		title: "Citizens of the Milky Way",
		image: COTMW,
		tools: ["JavaScript", "Procreate", "OpenSea"],
		sections: {
			problem:
				"I wanted to find a way to tell a story that I was curious to write while also learning how to generate automatic layer-based art in scripts.",
			solution:
				"A JavaScript file that created a massive amount of characters that I began to write short stories for.",
			product:
				"A first of its kind NFT Collection where each NFT character tells a part of a grand story.",
		},
	},
];

let otherProjects = [
	{
		link: null,
		linkName: null,
		title: "SLSA",
		description:
			"A Blockchain Based Student Lottery Service (under development)",
		image: null,
		tools: [],
	},
];

export default projectsArray;
