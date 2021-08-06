// screen where admins can change things about the group
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";

export default function Home(props) {
	const [blog, setBlog] = useState({
		title: "",
		link: "",
		pubDate: "",
		description: "",
		thumbnail: "",
	});

	const rss2json =
		"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samuelgschmitt";

	useEffect(() => {
		fetch(rss2json)
			.then((res) => res.json())
			.then((data) => {
				setBlog(data.items[0]);
			});
	}, [rss2json]);
	const subheader = {
		marginTop: 20,
		fontSize: 25,
	};
	return (
		<div
			style={{
				display: "flex",
				height: "90vh",
				flexDirection: "column",
				padding: 10,
			}}
		>
			<h1 style={{ alignSelf: "center" }}>Welcome</h1>
			<div>
				<h2 style={subheader}>Latest Blog</h2>
				<BlogCard
					title={blog.title}
					link={blog.link}
					pubDate={blog.pubDate}
					description={blog.description}
					thumbnail={blog.thumbnail}
				/>
			</div>
		</div>
	);
}
