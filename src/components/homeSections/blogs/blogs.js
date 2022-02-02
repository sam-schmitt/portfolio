import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BlogCard from "../../BlogCard/BlogCard";
import { FiChevronRight } from "react-icons/fi";

export default function BlogsSection(props) {
	const [blogs, setBlogs] = useState([]);
	const history = useHistory();
	const rss2json =
		"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samuelgschmitt";

	// useEffect(() => {
	// 	fetch(rss2json)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			let dataItems = data.items;
	// 			dataItems.length = 1;
	// 			setBlogs(dataItems);
	// 		});
	// }, [rss2json]);

	return (
		<div
			style={{
				padding: 10,
				display: "flex",
				width: "100%",
				maxWidth: 1000,
				justifyContent: "flex-start",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
					cursor: "pointer",
				}}
				onClick={() => {
					history.push("/blogs");
				}}
			>
				<h1
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					Blog
					<FiChevronRight />
				</h1>
			</div>
			{/* <div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
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
			</div> */}
		</div>
	);
}
