// screen where admins can change things about the group
import React, { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import SubFooter from "../../components/shared/subfooter/subfooter";
import SubHeader from "../../components/shared/subheader/subheader";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function Blog(props) {
	const [blogs, setBlogs] = useState([]);

	const rss2json =
		"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samuelgschmitt";

	useEffect(() => {
		fetch(rss2json)
			.then((res) => res.json())
			.then((data) => {
				setBlogs(data.items);
				console.log(data.items[0]);
			});
	}, [rss2json]);

	return (
		<FadeIn>
			<SubHeader />
			<div
				style={{
					padding: 10,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h1 style={{ alignSelf: "center" }}>Blogs</h1>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					{blogs.map(function (d, idx) {
						return (
							<div key={idx} className='noBullet'>
								<BlogCard
									title={d.title}
									link={d.link}
									pubDate={d.pubDate}
									description={d.description}
									thumbnail={d.thumbnail}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<SubFooter />
		</FadeIn>
	);
}
