import React from "react";
import { Card, BlogTitle, ReadMore } from "./BlogCardElements";
import logo from "../../assets/images/icon.png";

const BlogCard = ({ title, pubDate, link, description, thumbnail }) => {
	function cleanTitle(checkTitle) {
		checkTitle = checkTitle.replace("amp;", "");
		return checkTitle;
	}
	function truncateText(text, start, len) {
		return text.length > len ? text.slice(start, len) : text;
	}
	function spaceAfterUnsplash(text) {
		return text.replace("Unsplash", "Unsplash. ");
	}
	function toText(block) {
		let tag = document.createElement("div");
		tag.innerHTML = block;
		block = tag.innerText;
		return block;
	}
	function convertDate(date) {
		let dateArray = date.slice(0, 10).split("-");
		let year = dateArray.shift();
		dateArray.push(year);
		console.log(date);
		return `Published: ${dateArray.join("/")}`;
	}
	return (
		<>
			<Card to={{ pathname: link }} target='_blank'>
				<BlogTitle>{truncateText(cleanTitle(title), 0, 60)}</BlogTitle>

				<img
					src={thumbnail}
					alt={""}
					style={{ maxWidth: 400, justifySelf: "center" }}
				/>
				<br />
				<p>
					{truncateText(toText(spaceAfterUnsplash(description)), 0, 300) +
						"..."}
				</p>
				<br />
				<h4>{convertDate(pubDate)}</h4>
				<ReadMore to={{ pathname: link }} target='_blank'>
					Read More
				</ReadMore>
			</Card>
		</>
	);
};

export default BlogCard;
