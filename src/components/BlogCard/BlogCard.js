import React from "react";
import styles from "./blogCard.module.css";

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
		return `${dateArray.join("/")}`;
	}
	return (
		<>
			<div className={styles.blogCardContainer}>
				<h1 style={{ fontSize: "20px" }}>
					{truncateText(cleanTitle(title), 0, 60)}
				</h1>
				<img src={thumbnail} alt={""} className={styles.blogImageContainer} />

				<h4>{convertDate(pubDate)}</h4>

				<div className={styles.blogCardDescription}>
					<p className='blog-text-container'>
						{truncateText(toText(spaceAfterUnsplash(description)), 0, 300) +
							"..."}
					</p>
					<a
						href={link}
						rel='noreferrer'
						target='_blank'
						style={{ color: "#ccc" }}
					>
						Read More
					</a>
				</div>
			</div>
		</>
	);
};

export default BlogCard;
